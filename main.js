function keyPress(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if (!key) {
    return
  }

  key.classList.add('pressed')
}

function endTransition(evt) {
  evt.target.classList.remove('pressed')
}

window.addEventListener('keydown', keyPress);

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', endTransition));