const router = require('express').Router()
const ledController = require('./LED-controller')

router.get('/api/v1/test', (req, res) => {
    res.send('hello!')
})


router.get('/api/v1/startstop', (req, res) => {
    ledController.startStop()
    res.send('Look at your beautiful lights!')
})

router.get('/api/v1/forwards', (req, res) => {
    ledController.next()
    res.send('Next Mode!')
})

router.get('/api/v1/backwards', (req, res) => {
    ledController.previous()
    res.send('Previous Mode!')
})

router.get('/api/v1/reset', (req, res) => {
    ledController.restart()
    res.send('Lights have been reset!')
})

module.exports = router