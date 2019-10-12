const { Router } = require('express');

const configureConversionRoutes = require('./conversion/conversion.routes');

const router = new Router();

router.get('/', (req, res) => res.json({ message: 'Welcome!' }));
configureConversionRoutes(router);

module.exports = router;
