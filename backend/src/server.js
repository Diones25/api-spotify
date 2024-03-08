if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const cors = require('cors');
const router = require('./routes/router.js');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: 'http://18.228.38.54:3333'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(chalk.bgGreenBright.black(`Servidor rodando no endereço: http://localhost:${port}`));
});