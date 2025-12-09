import from byllm.lib {Model}

glob llm: Model = Model(model_name="gemini/gemini-2.0-flash");

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


walker generate_response{
    has text: str;

    def generate_supportive_response(text:str) -> str by llm();
    can generate with `root entry {
        result = self.generate_supportive_response(self.text);
        report result;
    }

}
