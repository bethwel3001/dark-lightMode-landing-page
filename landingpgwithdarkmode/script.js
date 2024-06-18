window.onload = function () {
  let darkMode = document.getElementById('dark');
  let isInDarkMode = false;
  let icon = document.getElementById('icon');
  icon.className = 'fas fa-moon';


  darkMode.addEventListener('click', function () {

      document.body.style.backgroundColor = isInDarkMode ? 'rgb(35, 59, 35)' : '#333';
      let html = document.getElementsByTagName('html')[0];
      html.style.backgroundColor = isInDarkMode ? 'yellowgreen' : '#111';
      let dark_mode_icon = 'fas fa-moon';
      let light_mode_icon = 'fas fa-sun';
      icon.className = isInDarkMode ? dark_mode_icon : light_mode_icon;

      isInDarkMode = !isInDarkMode;
  
  });
};