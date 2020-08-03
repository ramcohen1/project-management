const express = require('express')
const Project = require('../models/project')

const router = new express.Router()

router.post('/project', async (req, res) => {
   const { body } = req

   const project = new Project(body)

   try {
      await project.save()
      res.status(201).send(project)
   } catch (e) {
      res.status(400).send(e)
   }
})

module.exports = router