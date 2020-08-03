const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:/project-management',{
      useNewUrlParser: true, useUnifiedTopology: true,
      useCreateIndex:true
})