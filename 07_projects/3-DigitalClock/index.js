// console.log(date.toLocaleTimeString())
const clock = document.querySelector("#clock")


setInterval(function(){
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)