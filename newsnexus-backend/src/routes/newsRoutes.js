const express = require('express');
const NewsController = require('../controllers/newsController');

const router = express.Router();
const newsController = new NewsController();

function setRoutes(app) {
  router.get('/news', newsController.getAllNews.bind(newsController));
  router.get('/news/:id', newsController.getNewsById.bind(newsController));
  router.post('/news', newsController.createNews.bind(newsController));
  router.put('/news/:id', newsController.updateNews.bind(newsController));
  router.delete('/news/:id', newsController.deleteNews.bind(newsController));

  app.use('/api', router);
}

module.exports = setRoutes;