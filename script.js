let btnGreen = document.querySelector(".btn-green")
let btnPink = document.querySelector(".btn-pink")
let btnBlue = document.querySelector('.btn-blue')
let btnBlack = document.querySelector('.btn-black')
let btnWhite = document.querySelector('.btn-white')
let btnRed = document.querySelector('.btn-red')
let Circle = document.querySelector(".circle")
// img
let imgGreen = document.querySelector("#imgGreen")
let imgPink = document.querySelector("#imgPink")
let imgBlue = document.querySelector("#imgBlue")
let imgBlack = document.querySelector("#imgBlack")
let imgWhite = document.querySelector("#imgWhite")
let imgRed = document.querySelector("#imgRed")



btnGreen.addEventListener("click", () => {

    if (imgGreen.classList.contains("hidden")) {
        imgGreen.classList.remove("hidden")
        imgPink.classList.add("hidden")
        imgBlue.classList.add("hidden")
        imgBlack.classList.add("hidden")
        imgWhite.classList.add("hidden")
        imgRed.classList.add("hidden")
        // CIRCLE
        Circle.classList.add("Green")
        Circle.classList.remove("Pink")
        Circle.classList.remove("Blue")
        Circle.classList.remove("Black")
        Circle.classList.remove("White")
        Circle.classList.remove("Red")
    }
})

btnPink.addEventListener("click", () => {

    if (imgPink.classList.contains("hidden")) {
        imgPink.classList.remove("hidden")
        imgGreen.classList.add("hidden")
        imgBlue.classList.add("hidden")
        imgBlack.classList.add("hidden")
        imgWhite.classList.add("hidden")
        imgRed.classList.add("hidden")
        // CIRCLE
        Circle.classList.add("Pink")
        Circle.classList.remove("Green")
        Circle.classList.remove("Blue")
        Circle.classList.remove("Black")
        Circle.classList.remove("White")
        Circle.classList.remove("Red")

    }
})


btnBlue.addEventListener("click", () => {
    if (imgBlue.classList.contains("hidden")) {
        imgBlue.classList.remove("hidden")
        imgGreen.classList.add("hidden")
        imgPink.classList.add("hidden")
        imgBlack.classList.add("hidden")
        imgWhite.classList.add("hidden")
        imgRed.classList.add("hidden")
        // CIRCLE
        Circle.classList.add("Blue")
        Circle.classList.remove("Green")
        Circle.classList.remove("Pink")
        Circle.classList.remove("Black")
        Circle.classList.remove("White")
        Circle.classList.remove("Red")
    }
})

btnBlack.addEventListener("click", () => {
    if (imgBlack.classList.contains("hidden")) {
        imgBlack.classList.remove("hidden")
        imgGreen.classList.add("hidden")
        imgPink.classList.add("hidden")
        imgBlue.classList.add("hidden")
        imgWhite.classList.add("hidden")
        imgRed.classList.add("hidden")
        // CIRCLE
        Circle.classList.add("Black")
        Circle.classList.remove("Green")
        Circle.classList.remove("Pink")
        Circle.classList.remove("White")
        Circle.classList.remove("Red")

    }
})
btnWhite.addEventListener("click", () => {
    if (imgWhite.classList.contains("hidden")) {
        imgWhite.classList.remove("hidden")
        imgGreen.classList.add("hidden")
        imgPink.classList.add("hidden")
        imgBlue.classList.add("hidden")
        imgBlack.classList.add("hidden")
        imgRed.classList.add("hidden")
        // CIRCLE
        Circle.classList.add("White")
        Circle.classList.remove("Green")
        Circle.classList.remove("Pink")
        Circle.classList.remove("Black")
        Circle.classList.remove("Red")


    }
})
btnRed.addEventListener("click", () => {
    if (imgRed.classList.contains("hidden")) {
        imgRed.classList.remove("hidden")
        imgGreen.classList.add("hidden")
        imgPink.classList.add("hidden")
        imgBlue.classList.add("hidden")
        imgBlack.classList.add("hidden")
        imgWhite.classList.add("hidden")
        // CIRCLE
        Circle.classList.add("Red")
        Circle.classList.remove("Green")
        Circle.classList.remove("Pink")
        Circle.classList.remove("Black")
        Circle.classList.remove("White")
    }
})