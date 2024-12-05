const images = [
  'img.jpg', // First image
  'img1.jpg', // Second image
  'img2.jpg', // Third image
  'img3.jpg', // Last image
];

const pages = document.querySelectorAll('.page');
const messageContainer = document.getElementById('message-container');

let currentPage = 0;

// Preload images and assign them to pages
function preloadImages() {
  pages.forEach((page, index) => {
    const img = page.querySelector('img');
    if (images[index]) {
      img.src = images[index]; // Assign image based on index
    }
  });
}

// Rotate pages sequentially
function rotatePages() {
  if (currentPage < pages.length) {
    // Flip the current page
    pages[currentPage].style.transform = 'rotateX(180deg)';

    // Move to the next page
    currentPage++;

    // Schedule the next rotation
    setTimeout(rotatePages, 1500); // Delay between flips
  } else {
    // Show the final message when all pages are flipped
    showBirthdayMessage();
  }
}

// Show the birthday message after the last page
function showBirthdayMessage() {
  const calendar = document.getElementById('calendar');
  calendar.style.display = 'none';
  messageContainer.style.display = 'flex';
}

// Initialize and start the flipping animation
preloadImages();
rotatePages();
