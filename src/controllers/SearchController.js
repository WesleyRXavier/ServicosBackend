const Prof = require("../models/profissional");
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports={
    async index(request, response){
        const { latitude, longitude, servicos,distanceKm}= request.query;
         
        const servicosArray = parseStringAsArray(servicos);
        const profs = await Prof.find({
            servicos:{
                $in:servicosArray,
            },
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                    coordinates:[longitude, latitude],
                    },
                    $maxDistance:distanceKm*1000,
                    
                },
            },
        });

        return response.json(profs);


    }
};