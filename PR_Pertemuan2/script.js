// JavaScript to highlight the active navbar button based on the current section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li');

window.onscroll = () => {
    let scrollPosition = window.scrollY;
    
    sections.forEach(sec => {
        let top = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`nav ul li a[href*=${id}]`).parentElement.classList.add('active');
        }
    });
};
