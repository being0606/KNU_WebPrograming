function toggleMenu() {
    var menu = document.querySelector('.nav_menu');
    var rightNav = document.querySelector('.nav_right');
    
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
    rightNav.style.display = rightNav.style.display === 'none' ? 'flex' : 'none';
  }
  