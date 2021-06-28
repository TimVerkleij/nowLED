let modesArray = [
    "Breathing Blue",
    "Slow Rainbow",
    "Fast Rainbow",
    "Red",
    "Green",
    "Blue",
    "Traveling Blue",
    "Traveling Rainbow",
    "Rainbow Wave"
]

let currentModeIndex = 0

function next() {
    if (currentModeIndex === modesArray.length - 1) {
        currentModeIndex = 0
    } else {
        currentModeIndex++
    }

    return modesArray[currentModeIndex]
}

function previous() {
    if (currentModeIndex === 0) {
        currentModeIndex = modesArray.length - 1
    } else {
        currentModeIndex--
    }

    return modesArray[currentModeIndex]
}

function reset() {
    currentModeIndex = 0
    return modesArray[currentModeIndex]
}

module.exports = {next, previous, reset} 