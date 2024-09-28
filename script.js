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