let sections = document.querySelectorAll('section');
let lienNav = document.querySelectorAll('nav a');
let navbar = document.querySelector('.content-nav');
let navbar123 = document.querySelector('.responsive-bar');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            lienNav.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });

            let backgroundColor = window.getComputedStyle(sec).backgroundColor;
            navbar.style.backgroundColor = backgroundColor;
            navbar123.style.backgroundColor = backgroundColor;
        }
    });
};




 