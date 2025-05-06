import './styles.css'

// blur header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header')
  if (window.scrollY > 10) {
    header.classList.add('site-header--scrolled')
  } else {
    header.classList.remove('site-header--scrolled')
  }
})

// show all the products
document.addEventListener('DOMContentLoaded', () => {
  const viewAllBtn = document.getElementById('view-all-btn')
  const hiddenCards = document.querySelectorAll('.product-card-wrapper.hidden')
  viewAllBtn.addEventListener('click', () => {
    hiddenCards.forEach((card) => card.classList.remove('hidden'))
    viewAllBtn.style.display = 'none'
  })
})

// product cart animation
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('product-card--visible')
          observer.unobserve(entry.target) // Para animar solo una vez
        }
      })
    },
    {
      threshold: 0.1,
    }
  )

  cards.forEach((card) => observer.observe(card))

  const viewAllBtn = document.getElementById('view-all-btn')
  viewAllBtn?.addEventListener('click', () => {
    document
      .querySelectorAll('.hidden')
      .forEach((el) => el.classList.remove('hidden'))
    const newCards = document.querySelectorAll(
      '.product-card:not(.product-card--visible)'
    )
    newCards.forEach((card) => observer.observe(card))
  })
})
