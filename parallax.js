window.addEventListener('scroll', function () {

    const parallax = this.document.querySelector('.stars2');
    let scrollPosition = window.pageYOffset;


    parallax.style.transform = 'translateY(' + scrollPosition * -.1 + 'px)';
    
});