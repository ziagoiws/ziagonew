var mongoose = require('./connection');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var Modules = require('../models/ModelsMap');


var workoutSchema = new Schema({
    workout1: String,
    isEvolve: Number,
    Cal_per_workout: Number,
    Monthly_calorie_goal: Number,
    

},
{
    timestamps: true
}
);

workoutSchema.methods.getObjectId = function (stringId) {
return new mongoose.Types.ObjectId(stringId);
};

module.exports = mongoose.model('workout', workoutSchema);

