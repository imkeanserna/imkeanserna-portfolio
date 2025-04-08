export function getThemeInitScript() {
  return `
    (function() {
      try {
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const theme = savedTheme || systemTheme;
        
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      } catch (e) {}
    })();
  `;
}
