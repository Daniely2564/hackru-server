const router = require('express').Router();
const Car = require('../models/Car')
router.route('/car')
    .get((req,res)=>{
        const {longitude, latitude} = req.body;
        const cars = Car.find({longitude:{$gte:longitude - 0.362, $lte:longitude + 0.362 }, latitude:{$gte:latitude + 0.352, $lte: latitude - 0.352}});
        if(cars.length === 0){
            return []
        }
        return cars;
    })
    .post(async (req,res)=>{
        const {body} = req;
        const car = new Car();
        car.model = body.model;
        car.modelId = body.modelId;
        car.longitude = body.longitude;
        car.latitude = body.latitude;
       const newCar = await car.save();
       return newCar;
    });

module.exports = router;