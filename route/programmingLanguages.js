const express = require('express')

const router = express.Router()

const programmingLanguage = require('../services/programmingLanguages')


router.get('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguage.getMultiple(req.query.page))
    } catch (err) {
        console.error('Error while getting programming language list: ', err.message)
        next(err)
    }
})

module.exports = router