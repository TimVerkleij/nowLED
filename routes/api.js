const router = require('express').Router()
const blinker = require('./blink')

router.get('/api/v1/test', (req, res) => {
    res.send('hello!')
})


router.get('/api/v1/blink', (req, res) => {
    blinker.pressButton()
})

router.get('/api/v1/stopblink', (req, res) => {
    blinker.endBlink()
})

module.exports = router