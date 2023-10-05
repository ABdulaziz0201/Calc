const form = document.querySelector(`form`)
const sp = document.querySelector(`span`)
const inputlar = document.querySelectorAll(`input`)

form.addEventListener(`submit`, (e) => {
    e.preventDefault()
    let s1 = new Date(inputlar[0].value)
    let s2 = new Date(inputlar[1].value)

    
    sp.textContent = `
    ${Math.floor((s2 - s1) / 1000 / 60 / 60 / 24)}kun 
    ${Math.floor(((s2 - s1) / 1000 / 60 / 60) % 24)}soat 
    ${Math.floor(((s2 - s1) / 1000 / 60) % 60)}min
    ${Math.floor(((s2 - s1) / 1000) % 60)}sek

    `

    


})










// let today = new Date(`2023 10 31 00:00:00`)
// let tw = new Date(`2023 12 31 00:00:00`)

// console.log(
//     Math.floor((tw - today) / 1000 / 60 / 60 / 24 ),
//     Math.floor((tw - today) / 1000 / 60 / 60 % 24 ),
//     Math.floor((tw - today) / 1000 / 60 % 60 ),
//     Math.floor((tw - today) / 1000 % 60 ),
// );