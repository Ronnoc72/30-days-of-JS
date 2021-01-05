window.addEventListener("keydown", function(e) {
    const audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio[0].currentTime = 0
    audio[0].play();
    key[0].classList.add('playing');
});

function removeTransition(e) {
    console.log(e);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});