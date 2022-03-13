let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain_behind = document.getElementById('mountain_behind');
let mountain_front = document.getElementById('mountain_front');
let main_btn = document.getElementById('main-btn');
let text = document.getElementById('text');

window.addEventListener('scroll', function() {
    let scrollValue = this.window.scrollY;
    stars.style.left = scrollValue * 0.25 + 'px';
    moon.style.top = scrollValue * 1.05 + 'px';
    mountain_behind.style.top = scrollValue * 0.5 + 'px';
    mountain_front.style.top = scrollValue * 0 + 'px';
    text.style.marginRight = scrollValue * 3.65 + 'px';
    text.style.marginTop = scrollValue * 1.5 + 'px';
    main_btn.style.marginTop = scrollValue * 1.5 + 'px';
})