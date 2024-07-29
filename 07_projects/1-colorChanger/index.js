const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function (button){
  button.addEventListener('click', function(e){
    // console.log(e)
    // console.log(e.target)
    let color = e.target.id
    // console.log(color)
    body.style.backgroundColor = color;

  })
})