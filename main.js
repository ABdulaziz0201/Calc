const btn = document.querySelectorAll(`button`)
const nav = document.querySelector(`nav`)

let isNavOpen = false

btn[0].addEventListener(`click`, () => {
    if (isNavOpen) {
        isNavOpen = false
        let i = 200
        let an = setInterval( () => {
            i -= 5
            nav.style.height = i + `px`
            if (i <= 0) {
                clearInterval(an)
            }
        }, 10)
    } else {
        isNavOpen = true
        let i = 0
        let an = setInterval(() => {
            i += 5
            nav.style.height = i + `px`
            if (i >= 200) {
                clearInterval(an)
            }
        }, 10);
    }


})












