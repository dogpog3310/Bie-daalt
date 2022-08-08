document.addEventListener('keydown', event => {
    if (event.key === "ArrowLeft") { moveLeft(); }
    if (event.key === "ArrowRight") { moveRight(); }
}
)

let character = document.getElementById("character");
let image = document.getElementById('boy');
function myUpdate() {
    setInterval(() => {
        if (image.scroll.match('Leftrun.png')) {
            image.src = 'rightrun.png';
        } else {
            image.src = 'leftrun.png';
        }
    }, 300);
}
myUpdate(); {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    left -= 100;
    if (left >= 0) {
        character.style.left = left + 'px';
    }
}
function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    left += 100;
    if (left < 300) {
        character.style.left = left + 'px';
    }
}
let Block = document.getElementById('block');
let counter = 0;
block.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random() * 3);
    left = random * 100;
    Block.style.left = left + 'px';
    counter++;
})
setInterval(function () {
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('right'));
    let blockLeft = parseInt(window.getComputedStyle(Block).getPropertyValue('left'));
    let blockTop = parseInt(window.getComputedStyle(Block).getPropertyValue('top'));
    if (characterLeft == blockLeft && blockTop < 500 && blockTop > 95) {
        alert('Game over.Score' + counter);
        block.style.animation = 'none';
    }                                                                                                               
}, 1);
document.getElementById('Right').addEventListener('touchstart', moveRight);
document.getElementById('Right').addEventListener('touchstart', moveLeft)


