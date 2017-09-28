var mongoose = require('./connection');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var Modules = require('../models/ModelsMap');
var User = Modules.User;
var Workout = Modules.Workout;

var userSchema = new Schema({
    weight: Number,
    height: Number,
    gender: String,
    age: Number,
    time: Number,
    workout1: String,
    isEvolve: Number,
    Cal_per_workout: Number,
    Monthly_calorie_goal: Number,

},
{
    timestamps: true 
}
);

userSchema.methods.getObjectId = function (stringId) {
return new mongoose.Types.ObjectId(stringId);
};

module.exports = mongoose.model('user', userSchema);

