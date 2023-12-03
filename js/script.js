// Goals for this sidebar: 
// 1) Expand menu when hamburger button is pressed
// 2) Expand menu on swipe in mobile
// 3) Expand menu on mouse hover
// 4) Open with a delay when mouse hover the sidebar
// 5) Contract without a delay when mouse leaves the sidebar
// 6) Contract menu when hamburger button is pressed
// 7) Contract menu when opposite swipe or outside tap occurs

// Function to toggle the sidebar open/close
function toggleSidebar() {
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');

  // Toggles the 'open' class on the body element to show/hide the sidebar
  if (body.classList.contains('open')) {
    body.classList.remove('open');
  } else {
    body.classList.add('open');
  }

  // Reset variables and styles related to touch events and dragging
  sidebar.style.transform = '';
  touchStartX = 0;
  touchCurrentX = 0;
  isDragging = false;
}

const sidebar = document.querySelector('.sidebar');

// Swipe functionality for mobile
let touchStartX = 0;
let touchCurrentX = 0;
let isDragging = false;

// Event listener for touch start
sidebar.addEventListener('touchstart', function(event) {

  // Records the starting position of touch
  touchStartX = event.touches[0].clientX;
  isDragging = true;
});

// Event listener for touch move
sidebar.addEventListener('touchmove', function(event) {
  if (!isDragging) return;

  // Calculates the difference in position of touch
  touchCurrentX = event.touches[0].clientX;
  const touchDiffX = touchCurrentX - touchStartX;

  // Moves the sidebar right based on touch movement
  if (touchDiffX > 0 && touchStartX < 50) {
    event.preventDefault();
    sidebar.style.transform = 'translateX(' + touchDiffX + 'px)';
  }
});

// Event listener for touch end
sidebar.addEventListener('touchend', function() {
  const touchDiffX = touchCurrentX - touchStartX;

  // Determines if the sidebar should be opened or closed based on touch
  if (touchDiffX > 100 && touchStartX < 50) {
    document.body.classList.add('open');
  } else {
    document.body.classList.remove('open');
  }

  // Reset variables and styles related to touch events and dragging
  sidebar.style.transform = '';
  touchStartX = 0;
  touchCurrentX = 0;
  isDragging = false;
});

// Sidebar opening on mouse enter and closing on mouse leave
let openSidebarTimeout;

// Event listener for mouse enter
sidebar.addEventListener('mouseenter', function() {

  // Opens the sidebar after a delay when mouse enters
  openSidebarTimeout = setTimeout(function() {
    document.body.classList.add('open');
  }, 500);
});

// Event listener for mouse leave
sidebar.addEventListener('mouseleave', function() {

  // Closes the sidebar and clears the timeout when mouse leaves
  document.body.classList.remove('open');
  clearTimeout(openSidebarTimeout);
});

// Close sidebar on tap outside the sidebar on mobile
document.addEventListener('touchstart', function(event) {

  // Closes the sidebar if tapped outside and sidebar is open
  if (!sidebar.contains(event.target) && document.body.classList.contains('open')) {
    document.body.classList.remove('open');
  }
});

// Adding touch event listener to the burger button for closing the sidebar
const burgerButton = document.querySelector('.sidebar-burger');

// Event listener for touch end on the menu button
burgerButton.addEventListener('touchend', function() {

  // Closes the sidebar when the menu button is tapped
  document.body.classList.remove('open');
});


