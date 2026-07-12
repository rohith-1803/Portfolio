export function initTyping() {
  const target = document.querySelector('#typing-text');
  const words = ['AI & machine learning.', 'data-driven products.', 'full-stack experiences.'];
  let word = 0, character = 0, removing = false;
  function tick() {
    const current = words[word];
    target.textContent = current.slice(0, character);
    if (!removing && character < current.length) { character++; setTimeout(tick, 65); return; }
    if (!removing) { removing = true; setTimeout(tick, 1500); return; }
    if (character > 0) { character--; setTimeout(tick, 32); return; }
    removing = false; word = (word + 1) % words.length; setTimeout(tick, 280);
  }
  tick();
}
