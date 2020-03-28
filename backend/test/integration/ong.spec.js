const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () =>{
      await connection.migrate.latest();
    });
    it('shoud be able to create a new ONG', async () => {
        const response = await request(app)
         .post('/ongs')
         .send({
             name: "Nova Ong",
             email: "ong@ddd.com",
             whatsapp: "99999-8888",
             city: "Rio Verde",
             uf: "GO"
         });
       console.log(response.body);
    });
});