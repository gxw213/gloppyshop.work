// script.js

// Toggle Mobile Navigation
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load Theme Preference on Page Load
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
  loadProjects();
});

// Load Projects from JSON
async function loadProjects() {
  try {
    const response = await fetch('projects.json');
    const projects = await response.json();
    const container = document.getElementById('projects-container');

    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';

      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      `;

      container.appendChild(projectCard);
    });
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}
