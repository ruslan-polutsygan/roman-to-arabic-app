
const { Router } = require('express');
const { convertRomanToArabic } = require('./conversion.controller');

module.exports = (router) => {
  const conversionRouter = new Router();
  conversionRouter.put('/roman-to-arabic', convertRomanToArabic);

  router.use('/conversion', conversionRouter);
};
