const express = require('express')
const Worker = require('../models/worker')

const router = new express.Router()

router.post('/worker', async (req, res) => {
   const { body } = req

   const worker = new Worker(body)
   try {
      await worker.save()
      res.status(201).send(worker)
   } catch (e) {
      res.status(400).send(e)
   }
})

module.exports = router