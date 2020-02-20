// const keys = Array.from(document.querySelectorAll('.key'));

window.addEventListener('keydown', keyPress);


function keyPress(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

  if(!key) {return}

  key.classList.add('pressed')
}