/*For Burger Menu*/
const burgerMenu = document.getElementById('burger-menu');
const navLink = document.getElementById('nav-link');

burgerMenu.addEventListener('click', () => {
    navLink.classList.toggle('active'); 
});

const burgerIcon = document.querySelector('.burger-icon');

burgerIcon.addEventListener('click', function() {
    if (burgerIcon.style.color === 'rgb(90, 46, 152)') {
      burgerIcon.style.color = '#ffffff'; // Revert to the original color
    } else {
      burgerIcon.style.color = '#5a2e98'; // Change to the new color
    }
  });

  /*For Search box to show*/ 

  const search_display = document.getElementById('search-display');
  const search_wrapper = document.getElementById('search-wrapper');

  search_display.addEventListener('click', () => {
    search_wrapper.classList.toggle('active');
    

    if (search_wrapper.classList.contains('active')) {
        search_wrapper.style.display = 'block';
    } else {
        search_wrapper.style.display = 'none';
    }
});

/* For Login Form to show*/

const login_icon = document.getElementById('login-icon');
const log_in_wrapper = document.getElementById('log-in-wrapper'); 
const close_icon = document.getElementById('x-icon');

login_icon.addEventListener('click', () => {
  log_in_wrapper.classList.toggle('active');
});

close_icon.addEventListener('click', () => {
  log_in_wrapper.classList.remove('active');
});


