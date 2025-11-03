const burger = document.querySelector('.burger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');

    const icon = burger.querySelector('i');
    if (sidebar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

overlay.addEventListener('click', function() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    const icon = burger.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
});

document.querySelectorAll('.sidebar-item').forEach(item => {
    const submenu = item.querySelector('.submenu');
    const link = item.querySelector('.sidebar-link');

    if (submenu) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 

            document.querySelectorAll('.sidebar-item.open').forEach(openItem => {
                if (openItem !== item) {
                    openItem.classList.remove('open');
                    const otherSubmenu = openItem.querySelector('.submenu');
                    if (otherSubmenu) {
                        otherSubmenu.style.maxHeight = null;
                    }
                }
            });

            item.classList.toggle('open');
            if (item.classList.contains('open')) {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
            } else {
                submenu.style.maxHeight = null;
            }
        });
    }
});


const modeSwitch = document.getElementById("modeSwitch");

modeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});

const modeSwitchMobile = document.getElementById("modeSwitchMobile");

modeSwitchMobile.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});


document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5 
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
