import axios from 'axios';
import anime from 'animejs';

window.addEventListener('DOMContentLoaded', () => {
  const factText = document.getElementById('fact');
  const newFactBtn = document.getElementById('newFact');

  async function fetchFact() {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      factText.textContent = response.data.fact;

      anime({
        targets: '#fact',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad'
      });
    } catch (error) {
      factText.textContent = 'Kunde inte hämta fakta.';
      console.error(error);
    }
  }

  newFactBtn.addEventListener('click', fetchFact);
  fetchFact();
});
