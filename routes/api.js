const router = require('express').Router()

router.get('/api/v1/test', (req, res) => {
    res.send('hello!')
})

module.exports = router