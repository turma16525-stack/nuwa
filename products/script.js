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

function filtrar(categoria) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    if (categoria === 'todos') {
      card.style.display = 'block';
    } 
    
    else if (card.dataset.categoria === categoria) {
      card.style.display = 'block';
    } 

    else {
      card.style.display = 'none';
    }
  });

  const botoes = document.querySelectorAll('.menu button');

    botoes.forEach(btn => {
        btn.classList.remove('active');
    });

    event.target.classList.add('active');
}