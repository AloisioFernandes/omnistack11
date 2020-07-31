const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');
  
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX'); //conjunto aleatório de quatro bytes hexadecimais
    
    await connection('ongs').insert({ //conectando e inserindo dados na tabela
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id });
  }
};