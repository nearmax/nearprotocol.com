const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

new SmoothScroll('a[data-scroll]', {
  header: '#header',
  offset: 40,
  updateURL: false
});

window.addEventListener('scroll', () => {
  const sk = window.scrollY;
  if (sk > 52) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('isActive');
  menu.classList.toggle('isOpen');
});

function closeMenu() {
  menu.classList.remove('isOpen');
  menuBtn.classList.remove('isActive');
}

document.addEventListener('scrollStart', closeMenu, false);