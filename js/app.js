//variables
const burger = document.querySelector('.burger-nav');
const nav = document.querySelector('nav');
const navBg = document.querySelector('.nav-bg');
const links = document.querySelectorAll('nav a:not(.login)');



//listener
burger.addEventListener('click', () => {
    console.log("hello");
    nav.classList.toggle('active');
    navBg.classList.toggle('active');
    burger.classList.toggle('active');
});

for(const link of links) {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')) {
            if(link.parentElement.querySelector('.active') !== null) {
                link.parentElement.querySelector('.active').classList.remove('active');
            }
            link.classList.add('active');
            nav.classList.remove('active');
            navBg.classList.remove('active');
            burger.classList.remove('active');
        } else {
            return null;
        }
    })
}