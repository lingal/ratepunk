const toggleBtn = document.getElementById('nav-toggle');
const menuContainer = document.querySelector('.menu-container');


const showNavbar = () => {
  toggleBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('show-container');
    let toggleBtnIcon = toggleBtn.children[0];
    if (menuContainer.classList.contains('show-container')) {
      toggleBtnIcon.src = './assets/images/close.svg';
    } else {
      toggleBtnIcon.src = './assets/images/menu.svg';
    }
  });
}

showNavbar();