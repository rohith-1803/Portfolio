export function initPremiumMotion() {
  const canMove = window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canMove || window.innerWidth <= 850) return;
  const heroCopy = document.querySelector('.hero-copy');
  const heroArt = document.querySelector('.hero-art');
  let frame;
  window.addEventListener('pointermove', event => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const x = (event.clientX / window.innerWidth - .5) * 2;
      const y = (event.clientY / window.innerHeight - .5) * 2;
      heroCopy.style.transform = `translate3d(${x * -4}px, ${y * -3}px, 0)`;
      heroArt.style.transform = `translate3d(${x * 8}px, ${y * 6}px, 0)`;
    });
  }, { passive: true });
}
