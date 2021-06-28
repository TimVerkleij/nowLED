var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var backwards = new Gpio(2, 'out'); //use GPIO pin 4, and specify that it is output
var forwards = new Gpio(3, 'out');
var start = new Gpio(4, 'out');
var reset = new Gpio(17, 'out');

backwards.writeSync(1);
forwards.writeSync(1);
start.writeSync(1);
reset.writeSync(1);

async function startStop(){
    start.writeSync(0);
    await sleep(100);
    start.writeSync(1);
}

async function next() {
    forwards.writeSync(0);
    await sleep(100);
    forwards.writeSync(1);
}

async function previous() {
    backwards.writeSync(0);
    await sleep(100);
    backwards.writeSync(1);
}

async function restart(){
    reset.writeSync(0);
    await sleep(100);
    reset.writeSync(1);
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

module.exports = {previous, next, startStop, restart}