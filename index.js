const projectContainers = document.querySelectorAll('[class^="project-"');

projectContainers.forEach((container) => {
  for (const cls of container.className.split(" ")) {
    if (cls.startsWith("project-")) {
      const projectName = cls.slice("project-".length);
      container.addEventListener("click", (e) => {
        window.location.href = `/projects/${projectName}.html`;
      });
    }
  }
});
