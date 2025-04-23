// Script to toggle "See More About Me" modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
  
    if (openBtn && modal && closeBtn) {
      openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
      });
  
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    }
  
    // Script for the video popup modal
    const openVideoPopupBtn = document.getElementById('openVideoPopup');
    const videoPopup = document.getElementById('videoPopup');
    const closeVideoPopupBtn = document.getElementById('closeVideoPopup');
  
    if (openVideoPopupBtn && videoPopup && closeVideoPopupBtn) {
      openVideoPopupBtn.onclick = () => {
        videoPopup.style.display = 'flex';
      };
  
      closeVideoPopupBtn.onclick = () => {
        videoPopup.style.display = 'none';
        const iframe = videoPopup.querySelector('iframe');
        iframe.src = iframe.src;
      };
  
      window.onclick = (event) => {
        if (event.target == videoPopup) {
          videoPopup.style.display = 'none';
          const iframe = videoPopup.querySelector('iframe');
          iframe.src = iframe.src;
        }
      };
    }
  });

// the below script is for 
//Write JavaScript that:
//Changes text content dynamically.
//Modifies CSS styles via JavaScript.
//Adds or removes an element when a button is clicked.
// Select elements
const text = document.getElementById('text');
const changeTextBtn = document.getElementById('changeTextBtn');
const changeStyleBtn = document.getElementById('changeStyleBtn');
const addElementBtn = document.getElementById('addElementBtn');

// Function to change text content from the initial one in the html element with id="text"
changeTextBtn.addEventListener('click', () => {
  text.textContent = "GABRIELLA NEKESA WEKESA";
});

// Function to change the CSS styles of my text
changeStyleBtn.addEventListener('click', () => {
  text.style.color = '#001C6C';
  text.style.fontSize = '20px';
  text.style.fontFamily = 'Arial, sans-serif';
});

// Function to add a new element
addElementBtn.addEventListener('click', () => {
  const newPara = document.createElement('p');
  newPara.textContent = "This Bukusu queen loves herself, i have added this new line dynamically";
  document.body.appendChild(newPara);
});

  