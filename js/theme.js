export function initTheme() {
  const button = document.querySelector('.theme-toggle');
  const stored = localStorage.getItem('portfolio-theme');
  if (stored === 'light') document.documentElement.dataset.theme = 'light';

  const updateIcon = () => {
    const light = document.documentElement.dataset.theme === 'light';
    button.querySelector('i').className = light ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  };
  updateIcon();
  button.addEventListener('click', () => {
    const light = document.documentElement.dataset.theme === 'light';
    document.documentElement.dataset.theme = light ? '' : 'light';
    localStorage.setItem('portfolio-theme', light ? 'dark' : 'light');
    updateIcon();
  });
}
