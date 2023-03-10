const durations = [1500, 300, 1500, 300, 1500, 900];
let round = 0;

function startTimer() {
  const startingSeconds = durations[round];
  let time = startingSeconds;

  const countdownEl = document.getElementById('timer');

  const interval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(interval);
      round++;

      if (round < durations.length) {
        setBodyColor(durations[round]);
        setTimeout(startTimer, 1000);
      } else {
        countdownEl.innerHTML = 'FIM';
      }
    }
  }
}

function setBodyColor(time) {
  const body = document.body;

  if (time ===  1500) {
    body.style.backgroundColor = 'red';
  } else if (time === 300) {
    body.style.backgroundColor = 'green';
  } else if (time === 900) {
    body.style.backgroundColor = 'yellow';
  }
}

startTimer();
