const toggleBtn = document.getElementById('nav-toggle');
const menuContainer = document.querySelector('.menu-container');
const menuLinks = document.querySelectorAll('.menu-link');
let toggleBtnIcon = toggleBtn.children[0];

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuContainer.classList.remove('show-container');
    toggleBtnIcon.src = './assets/images/menu.svg';
  });
});

const showNavbar = () => {
  toggleBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('show-container');

    if (menuContainer.classList.contains('show-container')) {
      toggleBtnIcon.src = './assets/images/close.svg';
    } else {
      toggleBtnIcon.src = './assets/images/menu.svg';
    }
  });
};

showNavbar();
