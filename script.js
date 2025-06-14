// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Load theme preference
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
  loadProjects();
});

// Load projects
const projects = [
  {
    title: "Portfolio Website",
    description: "A clean personal portfolio website.",
    link: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    link: "https://github.com/yourusername/weather-app"
  }
];

function loadProjects() {
  const container = document.getElementById('projects-container');
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
  });
}
