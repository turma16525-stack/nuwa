//document.addEventListener("DOMContentLoaded", () => {
  //const verMaisBtn = document.getElementById("verMaisBtn");
  //const colecao = document.getElementById("colecao");

  //verMaisBtn.addEventListener("click", () => {
   // colecao.scrollIntoView({ behavior: "smooth" });
//  });
//});

 // JavaScript para scroll suave nos links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 4500); // Change image every 2 seconds
    }

    document.querySelectorAll('header a').forEach(link => {
  const linkPath = new URL(link.href, window.location.origin).pathname;
  const currentPath = window.location.pathname;

  if (linkPath === currentPath) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
    });
  }
});