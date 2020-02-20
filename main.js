let word = []

function keyPress(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if (!key) {
    return
  }

  key.classList.add('pressed');

  let regex = /Shift|Tab|Backspace|Enter|CapsLock|Control|Alt/

  switch (e.key) {
    case "Backspace":
      word.pop()
      break;
    case "Enter":
      word = []
      break;
    default:
      if (!regex.test(e.key)) {
        word.push(e.key)
      }
  }

document.getElementById('text-container').innerHTML = "<span>" + word.join('') + "</span>"
}

function endTransition(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if (!key) {
    return
  }

  key.classList.remove('pressed')
}

window.addEventListener('keydown', keyPress);
window.addEventListener('keyup', endTransition)