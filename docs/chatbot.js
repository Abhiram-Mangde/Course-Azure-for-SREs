document.addEventListener("DOMContentLoaded", async () => {

  const engine = new KnowledgeEngine({
    strictMode: true
  });

  await engine.init();

  const chatUI = new ChatUI(engine);
  chatUI.init();

  // Make toggle accessible globally
  window.toggleChat = () => chatUI.toggleChat();
});