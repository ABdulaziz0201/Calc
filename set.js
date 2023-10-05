const form = document.querySelector(`form`)
const span = document.querySelector(`span`)
const inputlar = document.querySelectorAll(`input`)

setInterval(() => {
    let soat = new Date()
    span.textContent =`${soat.getHours()}: ${soat.getMinutes()}: ${soat.getSeconds()}     `
}, 1000)