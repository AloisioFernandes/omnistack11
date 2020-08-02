const request = require('supertest') //biblioteca para fazer chamadas http em ambiente de testes(axios não é recomendado)
const app = require('../../src/app')
const connection = require('../../src/database/connection') //conexão com banco de dados

describe('ONG', () => {
  beforeEach(async () => { //antes de cada teste
    await connection.migrate.rollback() //desfaz todas as migrations, zera o banco de dados
    await connection.migrate.latest() //executa migrations para criar tabelas, evitando erros como no such table
  })

  afterAll(async () => {
    await connection.destroy() //desfaz todas as conexões com banco de dados
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD2",
        email: "contato@teste.com",
        whatsapp: "4700000000",
        city: "Rio do Sul",
        uf: "SC"
      })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})