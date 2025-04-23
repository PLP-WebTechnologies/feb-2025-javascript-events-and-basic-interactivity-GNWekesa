// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener('DOMContentLoaded', () => {
  // Get modal elements for "See More About Me"
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');

  // Ensure elements exist before adding event listeners
  if (openBtn && modal && closeBtn) {
    // Open modal on button click
    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // Close modal on close button click
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close modal if clicking outside the modal content
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // 🎥 Video popup modal elements
  const openVideoPopupBtn = document.getElementById('openVideoPopup');
  const videoPopup = document.getElementById('videoPopup');
  const closeVideoPopupBtn = document.getElementById('closeVideoPopup');

  if (openVideoPopupBtn && videoPopup && closeVideoPopupBtn) {
    // Show video popup on button click
    openVideoPopupBtn.onclick = () => {
      videoPopup.style.display = 'flex';
    };

    // Close video popup and reset video src to stop playback
    closeVideoPopupBtn.onclick = () => {
      videoPopup.style.display = 'none';
      const iframe = videoPopup.querySelector('iframe');
      iframe.src = iframe.src;
    };

    // Close video popup when clicking outside it
    window.onclick = (event) => {
      if (event.target == videoPopup) {
        videoPopup.style.display = 'none';
        const iframe = videoPopup.querySelector('iframe');
        iframe.src = iframe.src;
      }
    };
  }
});

// --- TEXT & STYLE INTERACTIONS ---

// Select interactive elements
const text = document.getElementById('text');
const changeTextBtn = document.getElementById('changeTextBtn');
const changeStyleBtn = document.getElementById('changeStyleBtn');
const addElementBtn = document.getElementById('addElementBtn');

// Change text content on button click
changeTextBtn.addEventListener('click', () => {
  text.textContent = "GABRIELLA NEKESA WEKESA";
});

// Modify text styles on button click
changeStyleBtn.addEventListener('click', () => {
  text.style.color = '#001C6C';
  text.style.fontSize = '20px';
  text.style.fontFamily = 'Arial, sans-serif';
});

// Dynamically add a new paragraph element to the page
addElementBtn.addEventListener('click', () => {
  const newPara = document.createElement('p');
  newPara.textContent = "This Bukusu queen loves herself, i have added this new line dynamically";
  document.body.appendChild(newPara);
});

// --- HOVER EFFECTS ---

const hoverBtn = document.getElementById('hoverBtn');
const hoverResult = document.getElementById('hoverResult');

// Show message on hover
hoverBtn.addEventListener('mouseover', () => {
  hoverResult.textContent = '🎉 Great! You hovered! I love Coldplay';
});

// Reset message when hover ends
hoverBtn.addEventListener('mouseout', () => {
  hoverResult.textContent = 'Hover to see magic!';
});

// --- KEYPRESS DETECTION ---

const keyInput = document.getElementById('keyInput');
const keyResult = document.getElementById('keyResult');

// Display the last key typed
keyInput.addEventListener('keyup', (e) => {
  keyResult.textContent = `You typed: ${e.key}`;
});

// --- DOUBLE-CLICK SECRET ---

const secretBtn = document.getElementById('secretBtn');
const secretResult = document.getElementById('secretResult');

// Reveal secret message on double-click
secretBtn.addEventListener('dblclick', () => {
  secretResult.textContent = '🤫 Secret activated! Their best hit is Viva la Vida 🎊';
});

// --- IMAGE GALLERY FUNCTIONALITY ---

const galleryImg = document.getElementById('galleryImg');
const prevImg = document.getElementById('prevImg');
const nextImg = document.getElementById('nextImg');

// Array of image URLs hosted on GitHub
const images = [
  'https://github.com/GNWekesa/myimages/blob/main/seated.jpg?raw=true',
  'https://github.com/GNWekesa/myimages/blob/main/sideeye.jpg?raw=true',
  'https://github.com/GNWekesa/myimages/blob/main/portraitsmiling.jpg?raw=true',
  'https://github.com/GNWekesa/myimages/blob/main/portraitbest.jpg?raw=true'
];

let currentImg = 0; // Index of current image

// Function to update the image source
function updateGallery() {
  galleryImg.src = images[currentImg];
}

// Show previous image
prevImg.addEventListener('click', () => {
  currentImg = (currentImg - 1 + images.length) % images.length;
  updateGallery();
});

// Show next image
nextImg.addEventListener('click', () => {
  currentImg = (currentImg + 1) % images.length;
  updateGallery();
});

// --- TABS ---

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Show content of clicked tab and hide others
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabContents.forEach(tab => tab.style.display = 'none');
    document.getElementById(btn.dataset.tab).style.display = 'block';
  });
});

// --- FORM VALIDATION ---

const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const feedback = document.getElementById('formFeedback');

// Handle form submission with validations
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent actual form submission
  feedback.style.color = 'red';

  // Check for required fields
  if (!nameInput.value || !emailInput.value || !passInput.value) {
    feedback.textContent = 'Please fill out all fields.';
    return;
  }

  // Validate email format
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    feedback.textContent = 'Invalid email format.';
    return;
  }

  // Enforce password length
  if (passInput.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
    return;
  }

  // If all validations pass
  feedback.style.color = 'green';
  feedback.textContent = 'Form submitted successfully! ✅';
});
