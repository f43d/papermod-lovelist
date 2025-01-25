// Disable theme toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.remove(); // Remove the toggle button
    }
    document.documentElement.setAttribute('data-theme', 'light'); // Force light mode
  });
  