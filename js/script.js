// Goals for the sidebar: 
// 1) Expand menu when hamburger button is pressed
// 2) Contract when hamburger button is pressed
// 3) Open with a delay when mouse hover the sidebar
// 4) Close without a delay when mouse leaves the sidebar

// ###############################
// # Denna kod är skriven av mig.#
// ###############################

// Opens sidebar
function toggleSidebar() {
  document.body.classList.toggle("open");
}
console.log(toggleSidebar);

// Opens sidebar on mouse hover
const sidebar = document.querySelector('.sidebar');

// Variable for delayed opening of sidebar on mouse hover
let timeout;

// Function to open sidebar
sidebar.addEventListener('mouseenter', function() {
  timeout = setTimeout(function() {
    document.body.classList.add('open');
  }, 500); // 500ms delay
});

// Function to close sidebar
sidebar.addEventListener('mouseleave', function() {
document.body.classList.remove('open');

console.log(addEventListener);

// Cancels the timeout if the mouse leaves before 500ms
clearTimeout(timeout);
});