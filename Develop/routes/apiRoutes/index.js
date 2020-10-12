const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notesRoutes');

// Middleware
router.use(notesRoutes);

module.exports = router;