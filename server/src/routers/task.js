const express = require('express')
const Task = require('../models/task')
const Project = require('../models/project')

const router = new express.Router()

router.post('/task', async (req, res) => {
   const { body } = req

   try {
      const project = await Project.findOne({ name: body.project.toString() })
      console.log(project)
      body.project = project._id
      console.log(body)
      const task = new Task({
         ...body
      })
      await task.save()

      // await task.populate('project').execPopulate()
      // console.log(task.project)

      res.status(201).send(task)
   } catch (e) {
      res.status(400).send(e)
   }
})

module.exports = router