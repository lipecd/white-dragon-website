// SHOW/HIDE MENU
const menu = document.getElementById('bar')
const item = document.getElementById('nav')

menu.onclick = function () {
  if (item.style.right == '-300px') {
    item.style.right = '0'
  } else {
    item.style.right = '-300px'
  }
}

// ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#homeContent .title, #homeContent .subtitle, #homeContent .white-btn, #homeContent .colored-btn,
#instructors .content, #instructors .cards,
#classes .title, #classes .subtitle, #classes .cards,
#contact .container, #contact .map
`,
  { interval: 150 }
)
