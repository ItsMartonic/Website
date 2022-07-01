// Define All UI Variables
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.website-navbar ul');
const navbarLinks = document.querySelectorAll('.website-navbar a');

// Load All Event Listeners
allEventListeners();

// Functions Of All Event Listeners
function allEventListeners() {
     // Toggler Icon Click Event
     navbarToggler.addEventListener('click', togglerClick);
     // Navbar Links Click Event
     navbarLinks.forEach( elem => elem.addEventListener('click', navbarLinkClick));
}

// togglerClick Function
function togglerClick() {
     navbarToggler.classList.toggle('toggler-open');
     navbarMenu.classList.toggle('open');
}

// navbarLinkClick Function
function navbarLinkClick() {
     if(navbarMenu.classList.contains('open')) {
          navbarToggler.click();
     }
}
