var Modules = require('../models/ModelsMap');
var mongoose = require('mongoose');
var User = Modules.User;
var Workout = Modules.Workout;


UserController = function(){

    this.insertUser = function(req,res){
        var newUser = new User();
        console.log(req.body);
        newUser.weight = req.body.weight;
        newUser.height = req.body.height;
        newUser.gender = req.body.gender;
        newUser.age = req.body.age;
        newUser.time = req.body.time;

        


        //Calculating burned calories 
        M_calc_brn_cal_1 = 8 * 3.5
        M_calc_brn_cal_2 = newUser.weight / 200 
        M_calc_brn_cal_3 = M_calc_brn_cal_1 * M_calc_brn_cal_2
        M_calc_brn_cal = M_calc_brn_cal_3 * newUser.time
        
        //Calculating BMI
        BMI1 = newUser.height/100
        BMI2 = BMI1*BMI1
        BMI = newUser.weight/BMI2
        //BMI3 = BMI

        //BMI values
        underWeight = BMI < 18.5
        Normal =  18.5 < BMI < 24.9
        overWeight = 25 < BMI < 29.9
        obese = BMI > 30
        //print ("BMI : ",BMI)

        if (BMI < 18.5 )
           // print("You are Underweight");
           console.log("Underweight");
            else if (18.5 < BMI < 24.9)
                //print("You are Normal");
                console.log("Normal");

            else if (25 < BMI < 29.9)
                //print("You are Overweight");
                console.log("Overweight");
            else if (BMI > 30)
                //print("You are Obese");
                console.log("Obese");
            else
                //print("else");
                console.log("else");

        //Predicting user goal
        H_to_m = BMI1 * BMI1
        //print("User's height in meters : ",H_to_m)
        BMI_user_diff = BMI - 24
        //print("BMI difference : ", BMI_user_diff)
        user_weight_after = H_to_m * 24
        //print("Expected weight", user_weight_after)
        Weight_to_loss = newUser.weight - user_weight_after
        //print("weight loss",Weight_to_loss)
        Cal_per_Month = Weight_to_loss * 7700
        //print("Calories need to be burned per month : ", Cal_per_Month)
        Cal_per_day = Cal_per_Month / 30
        //print("Calories need to be burned per day :",Cal_per_day)
        Cal_per_hour = Cal_per_day / 24
        //print("Caloried need to be burned per hour", Cal_per_hour)
        Cal_per_workout1 = Cal_per_hour * 20
        //print("Calories need to be burned per workout : ",Cal_per_workout1)
        Cal_per_workout = Cal_per_workout1 / 20
        
       // print( "user's Daily goal : ", Cal_per_workout )
        
        Monthly_calorie_goal = Cal_per_workout * 30
       // print("Monthly Calorie goal : ", Monthly_calorie_goal)
        
       
     
       newUser.Cal_per_workout = Cal_per_workout
       newUser.Monthly_calorie_goal = Monthly_calorie_goal
       //newUser.fro_workout = newWorkout;
       //newWorkout.save();   

      
    //newUser.fro_workout = newWorkout;
       
    // var newWorkout = new Workout();
    //  newWorkout.Cal_per_workout = Cal_per_workout
    //  newWorkout.Monthly_calorie_goal = Monthly_calorie_goal
    //  newUser.fro_workout.push(newWorkout);
        //call back function
        newUser.save(function(err,result){
            if (err) throw err;
           // res.send("Success");


     
        //

        // newWorkout.save(function(err,result){
        //     if (err) throw err;
            //res.send("Success1");
        })
    

        

        User.find({},function(err,result){
            if (err) throw err;
            res.send(result);
            });

    }

}

module.exports = new UserController();