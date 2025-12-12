import from byllm.lib {Model}

glob llm: Model = Model(model_name="gemini/gemini-2.5-flash");
#glob llm: Model = Model(model_name="ollama/llama3:70b");
#glob llm: Model = Model(model_name="gpt-4o");
#glob llm_fast: Model = Model(model_name="groq/llama-3.3-70b-versatile");
#glob llm: Model = Model(model_name="meta-llama/llama-3.3-70b-instruct");
#glob llm: Model = Model(model_name="mistralai/devstral-2512:free");


# Backend - nodes
node Mood {
    has text: str;
}

# Backend - walkers
walker share_mood {
    has text: str;

    can share with `root entry {
        new_mood = here ++> Mood(text=self.text);
        report new_mood;
    }
}


walker generate_response {
    has text: str;

    def generate_supportive_response(text:str) -> str by llm();

    can generate with `root entry {
        result = self.generate_supportive_response(self.text);
        report result;
    }
}
