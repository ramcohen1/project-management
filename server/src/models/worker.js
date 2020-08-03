const mongoose = require('mongoose')

const workerSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   age: {
      type: Number,
      required: true
   },
   idCard: {
      type: Number,
      required: true
   },
   job: {
      type: String,
      required: true
   },
   salary: {
      type: Number,
      required: true,
      min: 6000
   },
   task: {
      type: String,
      required: true,
      ref: 'Task'
   },
   project: {
      type: String,
      required: true,
      ref: 'Project'
   },
   genus: {
      type: String,
      required: true,
      validate(value) {
         if (value !== 'male' && value !== 'female') {
            throw new Error('Email is invalid')
         }
      }
   }
}, {
   timestamps: true
}
)

workerSchema.virtual('manager', {
   ref: 'Project',
   localField: '_id',
   foreignField: 'director'
})

const Worker = mongoose.model('Worker', workerSchema)

module.exports = Worker