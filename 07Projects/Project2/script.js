const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value) // this usecase gives empty value
form.addEventListener('submit' , function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give valid height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give valid weight ${weight}`
    }
    else {
    const bmi =  (weight / ((height*height)/10000)).toFixed(2)

    //result show 

    results.innerHTML = `<span>${bmi}</span>`

    // print the signs 

    if (bmi < 18.6) {
        results.innerHTML = `<span>${bmi} is Under Weight</span>`
    }else if (bmi >= 18.6 && bmi <= 24.9) {
        results.innerHTML = `<span>${bmi} is normal range</span>`
    } else { 
        results.innerHTML = `<span>${bmi} is Over Weight</span>`
    }
    }

    

})