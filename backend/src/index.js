const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); 
app.use(routes);
/*
Tipos de Parâmetros
*Query: Parâmetros nomeados enviados na rota após "?"(Filtros, paginação)
*Route Params: Parâmetros utilizados para identificar recursos
*Request Body: Corpo da requsição, utilizado para criar 
*/
/**
 * SQL: MySQL, SQLITE, PostgreSQL, Oracle
 * NoSQL: MongoDB, CouchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() em javascript
 */


app.listen(3333)


