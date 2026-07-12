export function initAnimations() {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));
  const counterObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (!entry.isIntersecting) return; const element = entry.target; const target = Number(element.dataset.counter); const decimals = target % 1 ? 2 : 0; const start = performance.now(); const duration = 1050; function step(now) { const progress = Math.min((now - start) / duration, 1); element.textContent = (target * (1 - Math.pow(1 - progress, 3))).toFixed(decimals); if (progress < 1) requestAnimationFrame(step); } requestAnimationFrame(step); counterObserver.unobserve(element); }), { threshold: .6 });
  document.querySelectorAll('[data-counter]').forEach(item => counterObserver.observe(item));
}
