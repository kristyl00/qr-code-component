// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
  (prefersDarkScheme.matches ? 'dark' : 'light');

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' 
    ? 'light' 
    : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

// Update theme icon based on current theme
function updateThemeIcon(theme) {
  const lightIcon = themeToggle.querySelector('.light-icon');
  const darkIcon = themeToggle.querySelector('.dark-icon');
  
  if (theme === 'dark') {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'inline';
  } else {
    lightIcon.style.display = 'inline';
    darkIcon.style.display = 'none';
  }
}

// Copy link functionality
const copyLink = document.querySelector('.copy-link');
const frontendMentorUrl = 'https://www.frontendmentor.io';

copyLink.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(frontendMentorUrl);
    
    // Update button text temporarily
    const originalText = copyLink.querySelector('.copy-text').textContent;
    copyLink.querySelector('.copy-text').textContent = 'Copied!';
    
    // Reset button text after 2 seconds
    setTimeout(() => {
      copyLink.querySelector('.copy-text').textContent = originalText;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy text: ', err);
    copyLink.querySelector('.copy-text').textContent = 'Failed to copy';
  }
}); 