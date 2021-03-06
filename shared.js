var backdrop = document.querySelector('.backdrop');
var toggleButton = document.querySelector('.main-burger');
var mobileNav = document.querySelector('.mobile-nav');
var body = document.querySelector('body')
var acc = document.getElementsByClassName('accordion');
var i;

backdrop.addEventListener('click', function() {
  mobileNav.classList.remove('open');
  mobileNav.getElementsByClassName('open')
  toggleButton.classList.remove('open');
  toggleButton.getElementsByClassName('open')
  body.classList.remove('lock')
  body.getElementsByTagName('lock')
  closeMenu();
});

function closeMenu() {
  backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
  toggleButton.classList.add('open');
  body.classList.add('lock');
});

var smoothJumpUP = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop) {
    window.scrollBy(0,-50);
    setTimeout(smoothJumpUP, 10);
  }
}

window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    document.getElementById('to-top').style.display = 'flex';
  } else {
    document.getElementById('to-top').style.display = 'none';
  }
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}