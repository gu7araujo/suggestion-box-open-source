const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SuggestionController = require('./controllers/Suggestion_Controller');

const routes = express.Router();

routes.get('/suggestions', SuggestionController.index);

routes.post('/suggestions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required().min(3),
    suggestion: Joi.string().required().min(20),
    phone: Joi.optional(),
    date: Joi.string().required()
  })
}), SuggestionController.create);

routes.delete('/suggestions/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}), SuggestionController.delete);

module.exports = routes;
