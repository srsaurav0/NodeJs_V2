// JavaScript to handle image gallery navigation
const images = [
  { src: 'images/h1.png', title: 'Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs Required' },
  { src: 'images/h2.png', title: 'Lakeside Haven | Living Room | Modern Decor | Fireplace' },
  { src: 'images/h3.png', title: 'Urban Loft | Kitchen | Fully Equipped | Stainless Appliances' },
  { src: 'images/h4.png', title: 'Seaside Cottage | Dining Room | Seats 8 | Open Concept' },
  { src: 'images/h5.jpg', title: 'Mountain Vista Cabin | Guest Bedroom | Queen Bed | Cozy Linens' },
  { src: 'images/h6.jpg', title: 'Cityscape Flat | Home Office | High-Speed Internet | Library' },
  { src: 'images/h7.jpg', title: 'Country Manor | Children\'s Playroom | Safe & Spacious' },
  { src: 'images/h8.jpg', title: 'Beachfront Bungalow | Outdoor Patio | BBQ Grill | Lake Views' },
  // Add more images as needed
];


let currentIndex = 0; // Track the current image index

// Elements
const mainImage = document.querySelector('.main-image');
const imageTitle = document.querySelector('.image-title');
const imageCounter = document.querySelector('.image-counter');

// Update the main image, title, and counter
function updateImage() {
  mainImage.src = images[currentIndex].src;
  imageTitle.textContent = images[currentIndex].title;
  imageCounter.textContent = `${currentIndex + 1}/${images.length}`;
}

// Navigate to the previous image
document.getElementById('prevButton').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

// Navigate to the next image
document.getElementById('nextButton').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

document.querySelector('.close-button-2').addEventListener('click', () => {
  history.back(); // Navigate back to the previous page
});

// Initialize with the first image
updateImage();