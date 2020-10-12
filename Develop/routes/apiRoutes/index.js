const router = require('express').Router();
const notesRoutes = require('./notesRoutes.js');

// Middleware
router.use(notesRoutes);

module.exports = router;