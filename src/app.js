import './styles.css'

// blur header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 10) {
    header.classList.add('site-header--scrolled');
  } else {
    header.classList.remove('site-header--scrolled');
  }
});

// show all the products
document.addEventListener('DOMContentLoaded', () => {
  const viewAllBtn = document.getElementById('view-all-btn');
  const hiddenCards = document.querySelectorAll('.product-card-wrapper.hidden');

  viewAllBtn.addEventListener('click', () => {
    hiddenCards.forEach(card => card.classList.remove('hidden'));
    viewAllBtn.style.display = 'none';
  });
});
