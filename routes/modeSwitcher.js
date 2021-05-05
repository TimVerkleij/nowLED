let modesArray = [
    "breathing blue",
    "slow(er) rainbow",
    "fast(er) rainbow",
    "red",
    "green",
    "blue",
    "traveling blue",
    "traveling rainbow (short)",
    "traveling rainbow (full)"
]

let currentModeIndex = 0

function next() {
    if (currentModeIndex === modesArray.length - 1) {
        currentModeIndex = 0
    } else {
        currentModeIndex++
    }
    console.log(currentModeIndex)
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