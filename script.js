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

//script for event handling for keypress
  const input = document.getElementById('keypressInput');

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      alert('Enter key was pressed!');
    }
  });
  
// script to change text color
  const changeTextButton = document.getElementById('changeTextButton');
  changeTextButton.addEventListener('click', () => {
    changeTextButton.textContent = 'Text Changed!';
    changeTextButton.style.backgroundColor = 'green';
  });