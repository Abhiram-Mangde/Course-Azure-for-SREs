class KnowledgeEngine {
  constructor(options = {}) {
    this.strictMode = options.strictMode ?? true;
    this.knowledgeBase = [];
    this.loaded = false;

    this.stopWords = [
      "what", "is", "the", "a", "an", "about",
      "tell", "me", "of", "in", "on", "for",
      "to", "and", "do", "does", "explain"
    ];
  }

  async init() {
    try {
      const response = await fetch("knowledge.json");
      this.knowledgeBase = await response.json();
      this.loaded = true;
    } catch (error) {
      console.error("Error loading knowledge base:", error);
    }
  }

  cleanInput(input) {
    return input
      .toLowerCase()
      .split(" ")
      .filter(word => word.length > 2 && !this.stopWords.includes(word))
      .join(" ");
  }

  search(input) {

    if (!this.loaded) {
      return {
        answer: "Knowledge base is still loading. Please try again.",
        suggestions: []
      };
    }

    const cleanedInput = this.cleanInput(input);
    const inputWords = cleanedInput.split(" ");

    let bestMatch = null;
    let highestScore = 0;

    for (let item of this.knowledgeBase) {

      let score = 0;
      const titleText = item.title.toLowerCase();
      const contentText = item.content.toLowerCase();

      inputWords.forEach(word => {
        if (titleText.includes(word)) score += 4;
        if (contentText.includes(word)) score += 2;
        if (item.tags && item.tags.includes(word)) score += 5;
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      return {
        answer: bestMatch.content.substring(0, 400) + "...",
        suggestions: this.generateSuggestions(inputWords),
        source: bestMatch.url || null
      };
    }

    if (this.strictMode) {
      return {
        answer: "I can only answer based on available course content. Please ask about Azure, SRE, KQL, DTDL, DSA, or platform modules.",
        suggestions: ["What modules are covered?", "Explain KQL basics", "What is Azure Monitor?"],
        source: null
      };
    }

    return {
      answer: "I couldn’t find a strong match. Try rephrasing your question.",
      suggestions: [],
      source: null
    };
  }

  generateSuggestions(words) {
    const suggestions = [];

    words.forEach(word => {
      suggestions.push(`Explain ${word} in detail`);
      suggestions.push(`How does ${word} work?`);
    });

    return suggestions.slice(0, 3);
  }
}