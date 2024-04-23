document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signup-form');
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Fechar o menu de navegação ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
        });
    });

    // Scroll suave para as seções
    const smoothScroll = function(targetId) {
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Seleciona todos os links de navegação interna
    const internalNavLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
    internalNavLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão de clique do link
            event.preventDefault();

            // Obtém o alvo da seção a ser rolada suavemente
            const targetId = this.getAttribute('href').slice(1);
            smoothScroll(targetId);
        });
    });

    // Adiciona classe 'active' ao link de navegação correspondente à seção atualmente visível
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
                const targetId = section.getAttribute('id');
                const targetNavLink = document.querySelector('.navbar-nav a[href="#' + targetId + '"]');
                const activeNavLink = document.querySelector('.navbar-nav .active');

                if (activeNavLink) {
                    activeNavLink.classList.remove('active');
                }
                targetNavLink.classList.add('active');
            }
        });
    });

    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário
            // Aqui você pode adicionar o código para lidar com o envio do formulário de inscrição

            // Simulando o envio do formulário por 2 segundos
            setTimeout(function() {
                // Adiciona a classe 'button-sent' ao botão de envio
                signUpForm.querySelector('button[type="submit"]').classList.add('button-sent');
                // Exibe a mensagem de sucesso
                successMessage.innerText = 'Formulário de inscrição enviado com sucesso!';
                successMessage.style.display = 'block';
                // Limpa o formulário após o envio
                signUpForm.reset();
            }, 2000);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio padrão do formulário
            // Aqui você pode adicionar o código para lidar com o envio do formulário de contato

            // Simulando o envio do formulário por 2 segundos
            setTimeout(function() {
                // Adiciona a classe 'button-sent' ao botão de envio
                contactForm.querySelector('button[type="submit"]').classList.add('button-sent');
                // Exibe a mensagem de sucesso
                successMessage.innerText = 'Formulário de contato enviado com sucesso!';
                successMessage.style.display = 'block';
                // Limpa o formulário após o envio
                contactForm.reset();
            }, 2000);
        });
    }
});
