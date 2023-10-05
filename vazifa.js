let box = document.querySelector(".box")
let btn = document.querySelector(".btn")

btn.addEventListener(`click`, () => {
    let i = 0
    let an = setInterval(() => {
        i ++
        box.style.marginLeft = i + "px"
        if (i >= 200) {
            clearInterval(an)
        }
    }, 10)






})


