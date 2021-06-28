const router = require('express').Router()
const ledController = require('../services/LED-controller')
const modeSwitcher = require('../services/modeSwitcher')

router.get('/api/v1/test', (req, res) => {
    res.send('hello!')
})

router.get('/api/v1/startstop', (req, res) => {
    ledController.startStop()
    res.json('Look at your beautiful lights!')
})

router.get('/api/v1/forwards', (req, res) => {
    ledController.next()
    let mode = modeSwitcher.next()
    res.json(mode)
})

router.get('/api/v1/backwards', (req, res) => {
    ledController.previous()
    let mode = modeSwitcher.previous()
    res.json(mode)
})

router.get('/api/v1/reset', (req, res) => {
    ledController.restart()
    let mode = modeSwitcher.reset()
    res.json(mode)
})

module.exports = router