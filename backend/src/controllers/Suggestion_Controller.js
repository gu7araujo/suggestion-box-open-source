const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const suggestions = await connection('suggestions').select('*');

    return response.json(suggestions);
  },

  async create(request, response) {
    const { name, suggestion, phone, date } = request.body;

    await connection('suggestions').insert({
      name,
      suggestion,
      phone,
      date
    });

    return response.json();
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection('suggestions').where('suggestion_id', id).delete();

    return response.status(204).send();
  }

};