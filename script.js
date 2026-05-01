const filterDropdown = document.getElementById('countryFilter');
const memeCards = document.querySelectorAll('.meme-card');

filterDropdown.addEventListener('change', () => {
  const selectedCountry = filterDropdown.value;
  
  memeCards.forEach(card => {
    if (selectedCountry === 'all' || card.dataset.country === selectedCountry) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
});



const playButtons = document.querySelectorAll('.play-btn');

const stopButtons = document.querySelectorAll('.stop-btn');

playButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    button.style.background = '#ffffff';
    button.style.color = '#000000';
  });
});



stopButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const card = button.closest('.meme-card');
    const playBtn = card.querySelector('.play-btn');
    playBtn.style.background = '#ff0000';
    playBtn.style.color = '#000000';
  });
});