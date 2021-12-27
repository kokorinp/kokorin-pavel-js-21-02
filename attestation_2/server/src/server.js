// В этом файле у нас конфигурируется сервер и назначаются middlewares
const express = require('express');
const context = require('request-context');
const { v4: generateUUID } = require('uuid');
const { host, port } = require('../config/serverConfig');
const logger = require('./logger/logger');
const router = require('./routes/index');

const app = express();
app.use(context.middleware('request'));
app.use(express.json());
app.use((req, res, next) => {
  context.set('uuid', generateUUID());
  res
    .type('application/json')
    .set('Access-Control-Allow-Origin', '*')
    // .set('Access-Control-Allow-Credential', 'true')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', router);

app.use((err, req, res, next) => {
  console.log(err);
  logger.fatal(err);
  res.status(500).send(err.toString());
  next();
});

app.listen(port, host, () => console.log(`Server started http://${host}:${port}`));
