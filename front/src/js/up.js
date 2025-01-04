document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');

    // Muestra el botón cuando se desplaza hacia abajo 100px desde la parte superior
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Desplaza la página al inicio cuando se hace clic en el botón
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
