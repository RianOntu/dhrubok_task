document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu-list');
    
    
    menuButton.addEventListener('click', function(event) {
      if (menu.classList.toggle('active')) {
        const menuHeight = Array.from(menu.children).map(item => item.clientHeight).reduce((a, b) => a + b, 0);
        menu.style.height = menuHeight + 'px';
      } else {
        menu.style.height = 0;
      }
    });
  });
