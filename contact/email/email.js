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

        const form = document.querySelector('#form');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
      
            emailjs.init({
             publicKey: "3GrhizjkyXN6to_X8",
            });

            //email para o cliente
            emailjs.sendForm('service_j75er7r', 'template_4zd0tls', form)

            //email para mim
            emailjs.sendForm('service_j75er7r', 'template_nbijr8l', form)
            .then((response) => alert("Mensagem enviada com sucesso!"))
            .catch((error) => {
                console.log(error);
                alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.");
            });
        });


