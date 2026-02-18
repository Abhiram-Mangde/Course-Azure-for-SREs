// =========================
// BASE URL for your GitHub Pages repo
// =========================

const repoBase = "/Course-Azure-for-SREs"; // <-- your repo base path


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
    console.log("Knowledge base loaded:", knowledgeBase.length, "entries");
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
// SMART CONTENT SEARCH
// =========================

function getBotResponse(input) {

  if (!knowledgeLoaded) {
    return "Knowledge base is still loading. Please try again in a moment.";
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

      // Weight title matches higher
      if (titleText.includes(word)) {
        score += 3;
      }

      if (contentText.includes(word)) {
        score += 1;
      }

    });

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {

    const preview = bestMatch.content.substring(0, 250);

    return `
Here’s what I found in "${bestMatch.title}":

${preview}...

Read more: ${bestMatch.url}
    `;
  }

  return "I couldn’t find a strong match. Try asking about Azure services, SRE modules, KQL, architecture patterns, or projects.";
}


// =========================
// SEND MESSAGE
// =========================

function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userText = inputField.value.trim();

  if (!userText) return;

  appendMessage(userText, "user-msg");

  // Show typing indicator
  appendMessage("Searching course content...", "bot-msg typing");

  setTimeout(() => {
    removeTypingIndicator();

    const botResponse = getBotResponse(userText);
    appendMessage(botResponse, "bot-msg");

  }, 600);

  inputField.value = "";
}


// =========================
// APPEND MESSAGE
// =========================

function appendMessage(text, className) {
  const chatBox = document.getElementById("chatBox");

  const messageDiv = document.createElement("div");
  messageDiv.className = className;

  // Support clickable links without interpreting text as HTML
  if (text.includes("Read more:")) {
    const parts = text.split("Read more:");

    // Add the preview text safely
    const previewSpan = document.createElement("span");
    previewSpan.innerText = parts[0];
    messageDiv.appendChild(previewSpan);

    // Add line breaks
    messageDiv.appendChild(document.createElement("br"));
    messageDiv.appendChild(document.createElement("br"));

    // Add the "Read full page" link
    const link = document.createElement("a");
    link.href = repoBase + parts[1].trim();
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Read full page \u2192";
    messageDiv.appendChild(link);
  } else {
    messageDiv.innerText = text;
  }

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}


// =========================
// REMOVE TYPING INDICATOR
// =========================

function removeTypingIndicator() {
  const chatBox = document.getElementById("chatBox");
  const typing = chatBox.querySelector(".typing");

  if (typing) {
    chatBox.removeChild(typing);
  }
}


// =========================
// ENTER KEY SUPPORT
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("userInput");

  if (inputField) {
    inputField.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }
});


// =========================
// CHAT TOGGLE
// =========================

function toggleChat() {
  const chatbot = document.getElementById("chatContainer");
  chatbot.classList.toggle("chat-open");
}
