const Prof = require("../models/profissional");
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
async index(request,response){
    const profs = await Prof.find();
    return response.json(profs);

},

  async store(request, response) {
    const {
      name,
      email,
      cpf,
      telefone,
      servicos,
      latitude,
      longitude
    } = request.body;

    let prof = await Prof.findOne({ cpf });
    if (!prof) {
      const servicosArray = parseStringAsArray(servicos);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

       prof = await Prof.create({
        name,
        cpf,
        email,
        telefone,
        servicos: servicosArray,
        location
      });
    }else{

      return response.json({msg:"Ja existe usuario"});
    }

    return response.json(prof);
  }
};
