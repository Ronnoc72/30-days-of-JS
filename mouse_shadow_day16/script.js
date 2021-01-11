const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
    const { offsetHeight: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    const walk = 100; // 100px

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7), 
    ${xWalk * -2}px ${yWalk * 2}px 0 rgba(0, 255, 255, 0.7), 
    ${xWalk}px ${yWalk * -1}px 0 rgba(255, 255, 0, 0.7)`;

}

hero.addEventListener('mousemove', shadow);