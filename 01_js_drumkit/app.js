(function () {
  var beats = document.querySelectorAll('.beat');

  function playSound(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
        beat = document.querySelector(`.beat[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    beat.classList.add('beat--active');
  }

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('beat--active');
  }

  beats.forEach(beat => beat.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
})();
