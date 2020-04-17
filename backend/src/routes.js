const express = require('express');

const SuggestionController = require('./controllers/Suggestion_Controller');

const routes = express.Router();

routes.get('/suggestions', SuggestionController.index);
routes.post('/suggestions', SuggestionController.create);
routes.delete('/suggestions/:id', SuggestionController.delete);

module.exports = routes;
