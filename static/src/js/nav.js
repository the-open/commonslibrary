let didScroll = false;
let lastScrollTop = 0;
let scrollDelta = 5;

function hasScrolled() {
    let scrollTop = window.scrollY;
    const navbarHeight = document.querySelector('.page-navigation__home').offsetHeight;
    const pageHead = document.querySelector('.page-head')

    if(Math.abs(lastScrollTop - scrollTop) <= scrollDelta) {
        return
    }

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (scrollTop > lastScrollTop && scrollTop > navbarHeight){
      // Scroll Down
      pageHead.classList.remove('shown');
      pageHead.classList.add('not-shown');
    } else {
      // Scroll Up
      if(scrollTop + window.outerHeight < document.documentElement.scrollHeight) {
          pageHead.classList.remove('not-shown');
          pageHead.classList.add('shown');
      }
    }

    lastScrollTop = scrollTop;
}
window.addEventListener('scroll', function(e) {
    didScroll = true;
});

window.setInterval(function() {
    if(didScroll) {
        hasScrolled();
        didScroll = false;
    }
});