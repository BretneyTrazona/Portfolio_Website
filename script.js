
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


function handleScrollAnimation() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
}


function enableSmoothScroll() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, 
                    behavior: 'smooth'
                });
            }
        });
    });
}

const flower1 = document.querySelector('.flower1')
const flower2 = document.querySelector('.flower2')
const about = document.querySelector('.about-us')


document.addEventListener('scroll',function(){
let value = window.scrollY

flower1.style.marginLeft = -value + 'px'
flower2.style.marginLeft = value + 'px'
about.style.marginTop = value +'px'

})

function handleStickyNavbar() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    const offset = heroSection.offsetHeight - navbar.offsetHeight;

    if (window.scrollY > offset) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}


function initialize() {
    enableSmoothScroll();
    document.addEventListener('scroll', handleScrollAnimation);
    document.addEventListener('scroll', handleStickyNavbar);
}


document.addEventListener('DOMContentLoaded', initialize);


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        const target = document.querySelector(event.target.getAttribute('href'));
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointment-form');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(appointmentForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const date = formData.get('date');
            const time = formData.get('time');

            alert(
                `Thank you, ${name}! Your appointment for ${service} is scheduled on ${date} at ${time}. We will contact you via email (${email}) or phone (${phone}).`
            );

            appointmentForm.reset();
            
        });
    }
});
