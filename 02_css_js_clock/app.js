(function () {
  const clockFace = document.querySelector('.js-clock-face');
  const secondHand = document.querySelector('.js-hand-second');
  const minuteHand = document.querySelector('.js-hand-minute');
  const hourHand = document.querySelector('.js-hand-hour');

  function createMarkers() {
    for(i = 0; i < 4; i++) {
      let hourMark = document.createElement("div"),
          markNum = (i + 1) * 3;

      hourMark.innerText = markNum;
      hourMark.classList.add('clock__hour-mark', `clock__hour-mark--${markNum}`);
      clockFace.appendChild(hourMark);
    }

    setClock();
    setInterval(setClock, 1000);
  }

  function setClock() {
    const now = new Date();
    const milliSeconds = now.getMilliseconds();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondsDegrees = 6 * seconds + (0.006 * milliSeconds) + 90;
    const minutesDegrees = 6 * minutes + (0.1 * seconds) + 90;
    const hoursDegrees = 30 * hours + (0.5 * minutes) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  createMarkers();
})();
