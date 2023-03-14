console.log('funguju!');
const side = 1

const dice = document.querySelector(img)

const changeSide = () => {
    side = side + 1
    dice.src = `img/side${side}.svg`
}

dice.addEventListener("keydown", changeSite)