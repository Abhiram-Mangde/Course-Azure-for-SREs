class ChatUI {
  constructor(engine) {
    this.engine = engine;
  }

  init() {
    this.attachEvents();
  }

  attachEvents() {
    const inputField = document.getElementById("userInput");

    inputField.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.sendMessage();
    });
  }

  sendMessage() {
    const inputField = document.getElementById("userInput");
    const userText = inputField.value.trim();
    if (!userText) return;

    this.appendMessage(userText, "user-msg");
    this.appendMessage("Thinking...", "bot-msg typing");

    setTimeout(() => {
      this.removeTypingIndicator();

      const response = this.engine.search(userText);

      this.appendMessage(response.answer, "bot-msg");

      if (response.source) {
        this.appendMessage(`View more: ${response.source}`, "bot-source");
      }

      this.appendSuggestions(response.suggestions);

    }, 700);

    inputField.value = "";
  }

  appendMessage(text, className) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  appendSuggestions(suggestions) {
    if (!suggestions || suggestions.length === 0) return;

    const chatBox = document.getElementById("chatBox");
    const container = document.createElement("div");
    container.className = "suggestions";

    suggestions.forEach(text => {
      const btn = document.createElement("button");
      btn.innerText = text;
      btn.onclick = () => {
        document.getElementById("userInput").value = text;
        this.sendMessage();
      };
      container.appendChild(btn);
    });

    chatBox.appendChild(container);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  removeTypingIndicator() {
    const typing = document.querySelector(".typing");
    if (typing) typing.remove();
  }

  toggleChat() {
    const chat = document.getElementById("chatWindow");
    chat.classList.toggle("open");
  }
}