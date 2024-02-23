const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
    {
        description :String,
        status : {type : Boolean, default : false},
        owner : {
            type : mongoose.Types.ObjectId,
            ref : 'user'
        },
        categorie : String,
        time: { type: Date, default: Date.now  }
    }
)

module.exports = mongoose.model('task',taskSchema)