// Disable theme toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    console.log('Custom JavaScript is loaded!');
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      console.log('Theme toggle button found and removed');
      themeToggle.remove(); // Remove the toggle button
    } else {
      console.log('Theme toggle button not found');
    }
    document.documentElement.setAttribute('data-theme', 'light'); // Force light mode
  });  
  
  