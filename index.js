const possibleMoves = ['blue', 'red', 'green', 'yellow']
let computerMoves = []
let userMoves = []

const computerMove = () => {
    const moveIndex = Math.round(Math.random() * 3)
    computerMoves.push(possibleMoves[moveIndex])

    console.log('Computer move is:')
    console.log(computerMoves)

    for (let i = 0; i < computerMoves.length; i++) {
        setTimeout(() => {
            if (i > 0) {
                deactivate(computerMoves[i - 1])
            }

            setTimeout(() => {
                activate(computerMoves[i])
            }, 250)

            if( i === computerMoves.length -1 ){
                setTimeout(() => {
                    deactivate(computerMoves[i])
                }, 1000)
            }
        }, 1000 * i)
    }
}

const blue = () => {
    userMoves.push('blue')
}

const red = () => {
    userMoves.push('red')
}

const green = () => {
    userMoves.push('green')
}

const yellow = () => {
    userMoves.push('yellow')
}

const compareMoves = () => {
    if (computerMoves.length !== userMoves.length) {
        return false
    }
    for (var i = 0; i < computerMoves.length; i++) {
        if (computerMoves[i] !== userMoves[i]) {
            return false
        }
    }
    return true
}

const done = () => {
    console.log('User move is:')
    console.log(userMoves)

    if (!compareMoves()) {
        alert('Unlucky punk! Try again')
    }
    else {
        computerMove()
        userMoves = []
    }
}

const reset = () => {
    computerMoves = []
    userMoves = []
}

activate = (id) => {
    document.getElementById(id).classList.add('active')
}

deactivate = (id) => {
    document.getElementById(id).classList.remove('active')
}
