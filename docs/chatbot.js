// =========================
// KNOWLEDGE BASE LOADING
// =========================

let knowledgeBase = [];
let knowledgeLoaded = false;

fetch("knowledge.json")
  .then(response => response.json())
  .then(data => {
    knowledgeBase = data;
    knowledgeLoaded = true;
  })
  .catch(error => {
    console.error("Error loading knowledge base:", error);
  });


// =========================
// STOP WORD FILTER
// =========================

const stopWords = [
  "what", "is", "the", "a", "an", "about",
  "tell", "me", "of", "in", "on", "for",
  "to", "and", "do", "does", "explain"
];

function cleanInput(input) {
  return input
    .toLowerCase()
    .split(" ")
    .filter(word => word.length > 2 && !stopWords.includes(word))
    .join(" ");
}


// =========================
// SMART SEARCH
// =========================

function getBotResponse(input) {

  if (!knowledgeLoaded) {
    return {
      answer: "Knowledge base is still loading. Please try again.",
      suggestions: []
    };
  }

  const cleanedInput = cleanInput(input);
  const inputWords = cleanedInput.split(" ");

  let bestMatch = null;
  let highestScore = 0;

  for (let item of knowledgeBase) {

    let score = 0;
    const titleText = item.title.toLowerCase();
    const contentText = item.content.toLowerCase();

    inputWords.forEach(word => {
      if (titleText.includes(word)) score += 3;
      if (contentText.includes(word)) score += 1;
    });

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {

    return {
      answer: bestMatch.content.substring(0, 300) + "...",
      suggestions: generateSuggestions(inputWords)
    };
  }

  return {
    answer: "I couldn’t find a strong match. Try asking about Azure services, SRE modules, KQL, architecture patterns, or projects.",
    suggestions: ["What modules are covered?", "What is Azure Monitor?", "Explain KQL basics"]
  };
}


// =========================
// GENERATE FOLLOW-UP QUESTIONS
// =========================

function generateSuggestions(words) {
  const suggestions = [];

  words.forEach(word => {
    suggestions.push(`Explain ${word} in detail`);
    suggestions.push(`How does ${word} work?`);
  });

  return suggestions.slice(0, 3);
}


// =========================
// SEND MESSAGE
// =========================

function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userText = inputField.value.trim();
  if (!userText) return;

  appendMessage(userText, "user-msg");

  appendMessage("Thinking...", "bot-msg typing");

  setTimeout(() => {
    removeTypingIndicator();

    const response = getBotResponse(userText);

    appendMessage(response.answer, "bot-msg");
    appendSuggestions(response.suggestions);

  }, 600);

  inputField.value = "";
}


// =========================
// MESSAGE RENDERING
// =========================

function appendMessage(text, className) {
  const chatBox = document.getElementById("chatBox");
  const messageDiv = document.createElement("div");
  messageDiv.className = className;
  messageDiv.innerText = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function appendSuggestions(suggestions) {
  const chatBox = document.getElementById("chatBox");

  const container = document.createElement("div");
  container.className = "suggestions";

  suggestions.forEach(text => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = () => {
      document.getElementById("userInput").value = text;
      sendMessage();
    };
    container.appendChild(btn);
  });

  chatBox.appendChild(container);
  chatBox.scrollTop = chatBox.scrollHeight;
}


// =========================
// REMOVE TYPING INDICATOR
// =========================

function removeTypingIndicator() {
  const typing = document.querySelector(".typing");
  if (typing) typing.remove();
}


// =========================
// ENTER KEY
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("userInput");
  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });
});


// =========================
// TOGGLE CHAT
// =========================

function toggleChat() {
  const chat = document.getElementById("chatWindow");
  chat.classList.toggle("open");
}
