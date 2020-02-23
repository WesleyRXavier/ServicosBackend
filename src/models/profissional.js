const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const ProfSchema = new mongoose.Schema({
    name: String,
    email:String,
    cpf:String,
    telefone:String,
    servicos:[String],
    location:{
        type:PointSchema,
        index:'2dsphere'
    }
    

});

module.exports = mongoose.model('Prof',ProfSchema );