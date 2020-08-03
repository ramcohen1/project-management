const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   state: {
      type: String,
      required: true
   },
   importance: {
      type: String,
      required: true
   },
   project: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Project'
   },
   completed: {
      type: Boolean,
      default: false
   }
}, {
   timestamps: true
})

taskSchema.virtual('working', {
   ref: 'Worker',
   localField: '_id',
   foreignField: 'task'
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task