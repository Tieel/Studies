const person = document.querySelector('.person')
const spikes = document.querySelector('.spikes')

const jump = () => {
    person.classList.add('jump');
    setTimeout(() => {
        person.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const spikesPosition = spikes.offsetLeft;
    const personPosition = +window.getComputedStyle(person).bottom.replace('px', '');

    if (spikesPosition <= 300 && spikesPosition > 0 && personPosition < 40 ) {
        spikes.style.animation = 'none';
        spikes.style.left = `${spikesPosition}px`;

        person.style.animation = 'none';
        person.style.bottom = `${personPosition}px`;

        person.src = './imgs/game-over.gif';
        person.style.width = '63%';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);