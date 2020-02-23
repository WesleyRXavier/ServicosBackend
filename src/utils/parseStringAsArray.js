module.exports = function parseStringAsArray (ArrayAsString){
return ArrayAsString.split(",").map(serv => serv.trim());
}