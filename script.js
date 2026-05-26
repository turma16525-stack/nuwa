window.addEventListener('load', () => {
  const box = document.querySelector('.box');
  if (box) {
    box.classList.add('show');
  }
});

document.querySelectorAll('header a').forEach(link => {
  const linkPath = new URL(link.href, window.location.origin).pathname;
  const currentPath = window.location.pathname;

  if (linkPath === currentPath) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
});