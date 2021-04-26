var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var backwards = new Gpio(2, 'out'); //use GPIO pin 4, and specify that it is output
var forwards = new Gpio(3, 'out');
var start = new Gpio(4, 'out');
var reset = new Gpio(17, 'out');

backwards.writeSync(0);
forwards.writeSync(0);
start.writeSync(0);
reset.writeSync(0);
//var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

// function blinkLED() { //function to start blinking
//     if (LED.readSync() === 0) { //check the pin state, if the state is 0 (or off)
//         LED.writeSync(1); //set pin state to 1 (turn LED on)
//     } else {
//         LED.writeSync(0); //set pin state to 0 (turn LED off)
//     }
// }

// function endBlink() { //function to stop blinking
//     //clearInterval(blinkInterval); // Stop blink intervals
//     LED.writeSync(0); // Turn LED off
//     //LED.unexport(); // Unexport GPIO to free resources
// }

async function startStop(){
    start.writeSync(1);
    await sleep(100);
    start.writeSync(0);
}

async function next() {
    forwards.writeSync(1);
    await sleep(100);
    forwards.writeSync(0);
}

async function previous() {
    backwards.writeSync(1);
    await sleep(100);
    backwards.writeSync(0);
}

async function restart(){
    reset.writeSync(1);
    await sleep(100);
    reset.writeSync(0);
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

//setTimeout(endBlink, 5000); //stop blinking after 5 seconds

module.exports = {previous, next, startStop, restart}