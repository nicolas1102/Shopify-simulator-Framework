import './styles.css'

document.addEventListener('DOMContentLoaded', () => {
  const viewAllBtn = document.getElementById('view-all-btn');
  const hiddenCards = document.querySelectorAll('.product-card-wrapper.hidden');

  viewAllBtn.addEventListener('click', () => {
    hiddenCards.forEach(card => card.classList.remove('hidden'));
    viewAllBtn.style.display = 'none'; // ocultar botón después de usar
  });
});