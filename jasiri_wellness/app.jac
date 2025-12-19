import from byllm.lib {Model}
import json;
import from datetime {datetime}
import from datetime {time}

glob llm: Model = Model(model_name="mistral/mistral-large-latest");

obj EmotionAnalysis {
    has emotion: str;
    has intensity: int;
    has triggers: list[str];
}

# Backend - nodes
node Emotion {
    has mood: str;
    has intensity: int;
    has timestamp: time;
}

node Trigger {
    has description: str;
    has source: str;
}

node Activity {
    has name: str;
    has completion_status: bool=False;

}

node Suggestion {
    has description: str;
    has effectiveness_score: float = 0.0;
}

node Journal {
    has text: str;
    has sentiment: str = "";
    #has timestamp: time;
}

node ResilienceScore {
    has score: float;
    has period_start: time;
    has period_end: time;
}

# Edges
edge caused_by {
    has confidence: float = 1.0;
} #from Emotion to Trigger;

edge managed_with {
    has effectiveness_score: float = 0.0;
} # Emotion managed with Activity or Suggestion

edge related_to {
    has notes: str = "";
} # Emotion related to Journal entry

edge improves_resilience {
    has impact_score: float = 0.0;
} # Activity improves Resilience


# Walkers
walker share_mood {
    has text: str;

    can share with `root entry {
        new_mood = here ++> Emotion(mood=self.text, intensity=5, timestamp=datetime.now());
        report new_mood;
    }
}

walker generate_response {
    has text: str;

    def generate_supportive_response(text:str) -> str by llm(
        system="""
        You are MindMate, an empathetic mental health companion with therapeutic training.
        
        RESPOND WITH:
        1. **Emotional Validation** - Name and validate their feeling
        2. **Brief Normalization** - "It's understandable to feel..." (if appropriate)
        3. **One Open Question** - Ask a gentle, reflective question
        4. **Hopeful Closing** - End with encouragement
        
        Tone: Warm, non-judgmental, compassionate. Use "I hear..." statements.
        Length: 2-3 sentences maximum.
        """
    );

    can generate with `root entry {
        result = self.generate_supportive_response(self.text);
        report result;
    }
}


walker listener_emotion {
    has user_input: str;

    def infer_emotion(text: str) -> EmotionAnalysis by llm(
            system="""
        You are a mental health analysis engine.

        Return ONLY valid JSON matching this schema:
        {
        "emotion": string,
        "intensity": number,
        "triggers": array of strings
        }

        No explanations.
        No markdown.
        No extra text.
        """
        );

    can listen with `root entry {
        analysis = self.infer_emotion(self.user_input);

        emotion_node = root ++> Emotion(
            mood=analysis.emotion,
            intensity=analysis.intensity,
            timestamp=datetime.now()
        );

        for t in analysis.triggers {
            trigger_node = root ++> Trigger(
                description=t,
                source="user_input"
            );
            emotion_node +>: caused_by :+> trigger_node;
        }

        report analysis;
    }
}


walker trendAnalyzer {
    has period_start: time;
    has period_end: time;

    def analyze_trends(start: time, end: time) -> str by llm();

    can analyze with `root entry {
        trend_report = self.analyze_trends(self.period_start, self.period_end);
        report trend_report;
    }
    
}

walker supportCompanion {
    has suggestions: list[str];

    can suggest with Emotion entry{
        for s in self.suggestions{
            suggestion_node = root ++> Suggestion(description=s);
            here +>: managed_with :+> suggestion_node;
        }

        report {"suggestions_created": len(self.suggestions)};
    }
}

walker mentorPlanner {
    has weekly_activities: list[str];
    has resilience_score: float;

    can plan_week with `root entry{
        resilience_node = root ++> ResilienceScore(
            score=self.resilience_score,
            period_start=datetime.now(),
            period_end=datetime.now() + timedelta(days=7)
        );

        for act in self.weekly_activities{
            activity_node = root ++> Activity(name=act);
            activity_node +>: improves_resilience :+> resilience_node;
        }

        report {"resilience_node_id": resilience_node.id};
    }
}


walker mindMateAgentWalker {
    has user_input: str;
    has chat_history: list[str] = [];
    has response: str = "";

    def therapist_reply(text: str) -> str by llm(
        system="""
You are MindMate, a compassionate mental health companion.
Respond empathetically, supportively, and conversationally.
"""
    );

    can serve with `root entry {

        # 1. ALWAYS generate therapist response
        self.response = self.therapist_reply(self.user_input);

        # 2. ALWAYS analyze emotion
        _ = root spawn listener_emotion(user_input=self.user_input);

        if "suggest" in self.user_input or "help" in self.user_input {
            _ = root spawn supportCompanion(
                suggestions=["Practice deep breathing", "Take a short walk", "Write down your thoughts"]
            );
        }
        if "week" in self.user_input or "plan" in self.user_input {
            _ = root spawn mentorPlanner(
                weekly_activities=["Gentle exercise", "Daily journaling"],
                resilience_score=0.6
            );
        }

        # 3. Update chat
        self.chat_history = self.chat_history + [
            f"User: {self.user_input}",
            f"MindMate: {self.response}"
        ];

        report {
            "response": self.response,
            "chat_history": self.chat_history
        };
    }
}



