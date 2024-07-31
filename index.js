const drumButtons = document.querySelectorAll('.drum');

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener('click', function () {

    const button = this.innerHTML;
    makeSound(button);
    buttonAnimate(button);

  });
}

document.addEventListener('keydown', function (e) {
  makeSound(e.key);
  buttonAnimate(e.key);
});

function makeSound(key) {
  switch (key) {
    case 'j':
      const crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case 'k':
      const kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;
    case 'l':
      const snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case 'w':
      const tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      const tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      const tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      const tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(button);
      break;
  }
}

function buttonAnimate(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`)

  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 100);
}