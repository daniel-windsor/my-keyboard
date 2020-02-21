let word = []

function keyPress(e) {

  let key = ""

  // Accounts for both modifier keys (shift, ctrl, alt)
  if (e.keyCode == 16 | e.keyCode == 17 || e.keyCode == 18) {
    key = document.querySelector(`div[data-key="${e.code}"]`)
  } else {
    key = document.querySelector(`div[data-key="${e.keyCode}"]`)
  }

  // If key is null it doesn't exist in this model
  if (!key) {
    return
  }

  key.classList.add('pressed');

  const regex = /Shift|Tab|Backspace|Enter|CapsLock|Control|Alt|Escape/

  //Ensure action keys perform their actions and don't add text
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

  document.getElementsByClassName('text-container')[0].innerHTML = "<span>" + word.join('') + "</span>"
}

function keyRelease(e) {
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  // If key = null, key is probably a modifier
  if (!key) {
    key = document.querySelector(`div[data-key="${e.code}"]`)
  }

  // If key is still null it doesn't exist in this model
  if (!key) {
    return
  }

  key.classList.remove('pressed')
}

//Handle intro animation and listeners
function transitionEnd(e) {
  console.log(e.target)

  if (e.target.classList == "text fade") {
    document.getElementsByClassName('text')[0].classList.remove('fade')
  } else if (e.target.classList == "text") {
    document.getElementsByClassName('text')[0].innerHTML = "Would you like to try it?"
    document.getElementsByClassName('text')[0].classList.add('fade')
    window.removeEventListener('transitionend', transitionEnd)

    window.addEventListener('keydown', keyPress);
    window.addEventListener('keyup', keyRelease)
    
  }
}

//Start intro animation
document.onload = document.getElementsByClassName('text')[0].classList.add('fade')

window.addEventListener('transitionend', transitionEnd)

