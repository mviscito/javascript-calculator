const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator_keys')
// listens for all key presses
keys.addEventListener('click', keys => {
  if (keys.target.matches('button')) {
    // something will happen here
  }
})

// determines which key was pressed
const key = e.target
const action = key.dataset.action

// if no data action is detected - number key was pressed
if (!action) {
  console.log('number key')
}

// if action detected it could be one of these
if (
  action == 'add' ||
  action == 'subtract' ||
  action == 'multiply' ||
  action == 'divide'
) {
  console.log('operator key')
}

// otherwise it's one of these bois
if (action === 'decimal') {
  console.log('decimal key')
}
if (action === 'clear') {
  console.log('clear key')
}
if (action === 'calculate') {
  console.log('equal key')
}
