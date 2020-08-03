const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      unique: true,
      trim: true
   },
   director: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: 'Worker'
   },
   cost: {
      type: Number,
      required: true
   },
   financialProfit: {
      type: Number,
      required: true
   },
   completed: {
      type: Boolean,
      required: true,
      default: false
   }
}, {
   timestamps: true
})

projectSchema.virtual('working', {
   ref: 'Worker',
   localField: '_id',
   foreignField: 'project'
})

projectSchema.virtual('tasks', {
   ref: 'Task',
   localField: 'name',
   foreignField: 'project'
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project