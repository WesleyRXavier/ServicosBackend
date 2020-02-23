const { Router} = require('express');
const ProfController = require('./controllers/ProfController');
const SearchController = require('./controllers/SearchController');

const routes = Router();
routes.get('/profs',ProfController.index );
routes.post('/profs',ProfController.store);

routes.get('/search',SearchController.index);//busca profs perto de uma regiao


module.exports = routes;