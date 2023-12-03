// Goals for this sidebar: 
// 1) Expand menu when hamburger button is pressed
// 2) Expand menu on swipe in mobile
// 3) Expand menu on mouse hover
// 4) Open with a delay when mouse hover the sidebar
// 5) Contract without a delay when mouse leaves the sidebar
// 6) Contract menu when hamburger button is pressed
// 7) Contract menu when opposite swipe or outside tap occurs

function toggleSidebar() {
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');

  if (body.classList.contains('open')) {
    body.classList.remove('open');
  } else {
    body.classList.add('open');
  }

  sidebar.style.transform = '';
  touchStartX = 0;
  touchCurrentX = 0;
  isDragging = false;
}

const sidebar = document.querySelector('.sidebar');

// Swipe functionality for mobile devices
let touchStartX = 0;
let touchCurrentX = 0;
let isDragging = false;

sidebar.addEventListener('touchstart', function(event) {
  touchStartX = event.touches[0].clientX;
  isDragging = true;
});

sidebar.addEventListener('touchmove', function(event) {
  if (!isDragging) return;

  touchCurrentX = event.touches[0].clientX;
  const touchDiffX = touchCurrentX - touchStartX;

  if (touchDiffX > 0 && touchStartX < 50) {
    event.preventDefault(); // Prevent default scroll behavior
    sidebar.style.transform = 'translateX(' + touchDiffX + 'px)';
  }
});

sidebar.addEventListener('touchend', function() {
  const touchDiffX = touchCurrentX - touchStartX;

  if (touchDiffX > 100 && touchStartX < 50) {
    // Open the sidebar
    document.body.classList.add('open');
  } else {
    // Close the sidebar
    document.body.classList.remove('open');
  }

  sidebar.style.transform = '';
  touchStartX = 0;
  touchCurrentX = 0;
  isDragging = false;
});

// Sidebar opening on mouse enter and closing on mouse leave for desktops
let openSidebarTimeout;

sidebar.addEventListener('mouseenter', function() {
  openSidebarTimeout = setTimeout(function() {
    document.body.classList.add('open');
  }, 500); // 500ms delay
});

sidebar.addEventListener('mouseleave', function() {
  document.body.classList.remove('open');
  clearTimeout(openSidebarTimeout);
});

// Close sidebar on tap outside the sidebar on mobile devices
document.addEventListener('touchstart', function(event) {
  if (!sidebar.contains(event.target) && document.body.classList.contains('open')) {
    document.body.classList.remove('open');
  }
});

