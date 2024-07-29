const form = document.querySelector("form")
//this give nuull string in height and weight
// const height = document.querySelector("#height").value

form.addEventListener("submit", (e) =>{
  e.preventDefault()
  const height = document.querySelector("#height").value
  const weight = document.querySelector("#weight").value
  const result = document.querySelector("#results")

  if(height == "" || height < 0 || isNaN(height)){
    // const newdiv = document.createElement('div')
    const addtext = document.createTextNode(`give valid height ${height}`)
    // newdiv.appendChild(addtext)
    // result.replaceWith(newdiv)
    result.appendChild(addtext)
  }
  if(weight == "" || weight < 0 || isNaN(weight)){
    const addtext = document.createTextNode(`give valid weight ${weight}`)
    result.appendChild(addtext)
  }
    else{
      const bmi = (weight /((height*height) / 10000)).toFixed(2)
      result.innerHTML = bmi;
      const newdiv = document.createElement('div')
      
        if(bmi <  18.6){
          const addText = document.createTextNode("Under weight")
          newdiv.appendChild(addText)
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
          const addText = document.createTextNode("Normal weight")
          newdiv.appendChild(addText)
        }
        else{
          const addText = document.createTextNode("Over weight")
          newdiv.appendChild(addText)
        }
        result.appendChild(newdiv)
    }
})