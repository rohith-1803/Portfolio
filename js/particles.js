export function initParticles() {
  const canvas = document.querySelector('#particle-canvas');
  const context = canvas.getContext('2d');
  const particles = [];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  function create() { return { x: Math.random() * canvas.width, y: Math.random() * canvas.height, xSpeed: (Math.random() - .5) * .16, ySpeed: (Math.random() - .5) * .16, size: Math.random() * 1.25 + .25 }; }
  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#60a5fa';
    particles.forEach(p => { p.x += p.xSpeed; p.y += p.ySpeed; if (p.x < 0 || p.x > canvas.width) p.xSpeed *= -1; if (p.y < 0 || p.y > canvas.height) p.ySpeed *= -1; context.globalAlpha = .45; context.beginPath(); context.arc(p.x, p.y, p.size, 0, Math.PI * 2); context.fill(); });
    context.globalAlpha = 1; requestAnimationFrame(draw);
  }
  resize(); for (let i = 0; i < 52; i++) particles.push(create()); window.addEventListener('resize', resize); draw();
}
