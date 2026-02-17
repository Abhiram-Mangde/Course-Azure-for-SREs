const faqs = [
  {
    keywords: ["what is this course", "about this course", "course overview"],
    answer: "This course is designed for aspiring and junior SREs who want to master Azure fundamentals and SRE best practices with hands-on projects."
  },
  {
    keywords: ["who should take", "target audience"],
    answer: "Beginners in cloud, junior SREs, DevOps engineers, students, and IT professionals."
  },
  {
    keywords: ["prerequisites", "requirements"],
    answer: "No prior cloud or SRE experience required. Basic IT knowledge is optional."
  },
  {
    keywords: ["modules", "course structure"],
    answer: "There are 8 modules covering Azure basics, monitoring, reliability, automation, security, projects, and career prep."
  },
  {
    keywords: ["certifications"],
    answer: "Recommended certifications: AZ-900, AZ-104, AZ-400, and CKA/AKS."
  }
];

function getBotResponse(input) {
  input = input.toLowerCase();

  for (let faq of faqs) {
    for (let keyword of faq.keywords) {
      if (input.includes(keyword)) {
        return faq.answer;
      }
    }
  }

  return "I couldn't find that in the FAQs. Try asking about modules, prerequisites, or certifications.";
}

function sendMessage() {
  const inputField = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = inputField.value;
  if (!userText.trim()) return;

  chatBox.innerHTML += `<div class="user-msg">${userText}</div>`;

  const botResponse = getBotResponse(userText);

  setTimeout(() => {
    chatBox.innerHTML += `<div class="bot-msg">${botResponse}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 400);

  inputField.value = "";
}
