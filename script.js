// Initialize n setting default volume
document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.volume = 0.7; 
  });
});


function toggleMeme(videoId, button) {
  const video = document.getElementById(videoId);
  
  if (video.paused) {
    
    document.querySelectorAll('video').forEach(v => {
      if (v.id !== videoId) {
        v.pause();
        v.currentTime = 0;
      }
    });
    
    
    document.querySelectorAll('.play-btn').forEach(btn => {
      btn.textContent = '▶️ Play';
      btn.classList.remove('playing');
    });
    
   
    video.play();
    button.textContent = '⏸️ Stop';
    button.classList.add('playing');
    
  } else {
    
    video.pause();
    video.currentTime = 0;
    button.textContent = '▶️ Play';
    button.classList.remove('playing');
  }
}
function setVolume(videoId, value) {
  const video = document.getElementById(videoId);
  video.volume = value / 100;
}

const filterButtons = document.querySelectorAll('.filter-btn');
const memeCards = document.querySelectorAll('.meme-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const country = button.dataset.country;
    
    
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Filterng memes
    memeCards.forEach(card => {
      if (country === 'all' || card.dataset.country === country) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
        
        
        const video = card.querySelector('video');
        const playBtn = card.querySelector('.play-btn');
        video.pause();
        video.currentTime = 0;
        playBtn.textContent = '▶️ Play';
        playBtn.classList.remove('playing');
      }
    });
  });
});

// Keyboard Shortcuts (1-9)
document.addEventListener('keydown', (e) => {
  const key = parseInt(e.key);
  if (key >= 1 && key <= 9) {
    const videoId = `meme${key}`;
    const video = document.getElementById(videoId);
    if (video) {
      const button = video.closest('.meme-card').querySelector('.play-btn');
      toggleMeme(videoId, button);
    }
  }
});