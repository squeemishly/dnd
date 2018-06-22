
const bodyparser = require('body-parser');
const express = require('express');

const createApp = {
  init() {
    this.app = express();
    this.routes();

    return this.app;
  },
  routes() {
    let router = express.Router();
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello'
      })
    })
    this.app.use('/', router);
  }
};

module.exports = createApp.init();
