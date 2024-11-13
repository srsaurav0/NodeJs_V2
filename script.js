// Get elements
const popupOverlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('close-button');
const regionSelect = document.getElementById('region-select');
const currencyDisplay = document.getElementById('currency-display');

// Get the necessary elements
const saveButton = document.querySelector('.save-button');
const openPopup = document.getElementById('openPopup');

// Mapping region to currency
const regionToCurrency = {
  'PT': 'EUR',
  'US': 'USD',
  'GB': 'GBP',
  'JP': 'JPY',
  'AU': 'AUD',
  'CA': 'CAD',
  'DE': 'EUR',
  'FR': 'EUR',
  'IT': 'EUR',
  'ES': 'EUR',
  'CN': 'CNY',
  'IN': 'INR',
  'BR': 'BRL',
  'RU': 'RUB',
  'MX': 'MXN',
  'ZA': 'ZAR',
  'KR': 'KRW',
  'SE': 'SEK',
  'NL': 'EUR',
  'CH': 'CHF',
  'BE': 'EUR',
  'AR': 'ARS',
  'NO': 'NOK',
  'AT': 'EUR',
  'DK': 'DKK',
  'FI': 'EUR',
  'PL': 'PLN',
  'NZ': 'NZD',
  'IE': 'EUR',
  'GR': 'EUR'
};



// Mapping region to country name
const regionToCountry = {
  'PT': 'Portugal',
  'US': 'United States',
  'GB': 'United Kingdom',
  'JP': 'Japan',
  'AU': 'Australia',
  'CA': 'Canada',
  'DE': 'Germany',
  'FR': 'France',
  'IT': 'Italy',
  'ES': 'Spain',
  'CN': 'China',
  'IN': 'India',
  'BR': 'Brazil',
  'RU': 'Russia',
  'MX': 'Mexico',
  'ZA': 'South Africa',
  'KR': 'South Korea',
  'SE': 'Sweden',
  'NL': 'Netherlands',
  'CH': 'Switzerland',
  'BE': 'Belgium',
  'AR': 'Argentina',
  'NO': 'Norway',
  'AT': 'Austria',
  'DK': 'Denmark',
  'FI': 'Finland',
  'PL': 'Poland',
  'NZ': 'New Zealand',
  'IE': 'Ireland',
  'GR': 'Greece'
};


// Set initial currency based on the selected region
currencyDisplay.value = regionToCurrency[regionSelect.value];

// Function to show the popup
document.getElementById('openPopup').addEventListener('click', () => {
  popupOverlay.style.display = 'flex'; // Show the overlay
});

// Close the popup if the user clicks outside the popup
popupOverlay.addEventListener('click', (event) => {
  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// Update currency immediately when the region changes
regionSelect.addEventListener('change', function () {
  const selectedRegion = this.value;
  currencyDisplay.value = regionToCurrency[selectedRegion];
});


// Event listener for the Save button
saveButton.addEventListener('click', () => {
  // Get the selected region value
  const selectedRegion = regionSelect.value;

  // Update the country name in the navigation
  openPopup.querySelector('b').textContent = regionToCountry[selectedRegion];

  // Close the popup
  popupOverlay.style.display = 'none';
});

// Gallery Section
const shareBtn = document.querySelector('.btn'); // Button to open the popup
const sharePopup = document.querySelector('.share-popup'); // The popup itself
const closeButton = document.querySelector('.close-btn'); // Button to close the popup
const copyLinkButton = document.getElementById('copy-link'); // Button for copying link

shareBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent this click from closing the popup immediately
  sharePopup.classList.toggle('hide');
});

closeButton.addEventListener('click', () => {
  sharePopup.classList.add('hide'); // Hide the popup
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.share-container') && !sharePopup.classList.contains('hide')) {
    sharePopup.classList.add('hide');
  }
});

copyLinkButton.addEventListener('click', (event) => {
  event.preventDefault();
  navigator.clipboard.writeText(window.location.href) // Copy the current URL to the clipboard
    .then(() => alert('Link copied to clipboard!'))
    .catch(err => console.error('Error copying link: ', err));
});




// Save section

// Get the heart button and icon elements
const heartButton = document.getElementById('heartButton');
const heartIcon = document.getElementById('heartIcon');

// Check localStorage for the current state and set the initial heart icon
const isHeartRed = localStorage.getItem('isHeartRed') === 'true';
heartIcon.textContent = isHeartRed ? '❤️' : '🤍';

// Add event listener for button click
heartButton.addEventListener('click', () => {
  // Toggle heart state between red and white
  if (heartIcon.textContent === '🤍') {
    heartIcon.textContent = '❤️';
    localStorage.setItem('isHeartRed', 'true'); // Save state to localStorage
  } else {
    heartIcon.textContent = '🤍';
    localStorage.setItem('isHeartRed', 'false'); // Save state to localStorage
  }
});




// Travel section
document.addEventListener('DOMContentLoaded', function () {
  var travelerSelector = document.querySelector('.travelers-selector');
  var guestSelector = document.querySelector('.guest-selector');
  var buttonsIncrement = document.querySelectorAll('.increment');
  var buttonsDecrement = document.querySelectorAll('.decrement');
  var doneButton = document.querySelector('.done-button');
  var travelerCount = document.querySelector('.travelers-count');

  // Function to update button styles based on the count
  function updateButtonStyles(counter) {
    const decrementButton = counter.parentElement.querySelector('.decrement');
    if (parseInt(counter.innerText) > 0) {
      decrementButton.style.backgroundColor = ''; // Default color when the count is more than zero
    } else {
      decrementButton.style.backgroundColor = 'gray'; // Change to gray if zero
    }
  }

  // Toggle guest selector display
  travelerSelector.addEventListener('click', function () {
    guestSelector.style.display = guestSelector.style.display === 'block' ? 'none' : 'block';
  });

  // Increment and decrement buttons
  buttonsIncrement.forEach(function (button) {
    button.addEventListener('click', function () {
      var counter = this.parentElement.querySelector('.counter-value');
      counter.innerText = parseInt(counter.innerText) + 1;
      updateButtonStyles(counter); // Update the corresponding decrement button
    });
  });

  buttonsDecrement.forEach(function (button) {
    button.addEventListener('click', function () {
      var counter = this.parentElement.querySelector('.counter-value');
      var count = parseInt(counter.innerText);
      if (count > 0) {
        counter.innerText = count - 1;
      }
      updateButtonStyles(counter); // Update this button's style
    });
  });

  // Update traveler count and hide selector
  doneButton.addEventListener('click', function () {
    var adults = parseInt(document.querySelector('[data-type="adults"]').innerText);
    var children = parseInt(document.querySelector('[data-type="children"]').innerText);
    travelerCount.innerText = (adults + children) + ' travelers';
    guestSelector.style.display = 'none';
  });

  // Initialize button colors on load
  document.querySelectorAll('.counter-value').forEach(function (counter) {
    updateButtonStyles(counter); // Initialize colors based on current values
  });
});

