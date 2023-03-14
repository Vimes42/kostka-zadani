console.log('funguju!');
let side = 1

const dice = document.querySelector(".dice")

const changeSide = () => {
    side = side + 1
    dice.src = `img/side${side}.svg`
}

document.addEventListener("keydown", changeSide)