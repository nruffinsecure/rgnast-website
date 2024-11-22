document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navigation = document.querySelector('nav');
  
    menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('active');
      navigation.classList.toggle('show');
    });
  });
  