const express = require('express');
const router = express.Router();

const apiNoteRouter = require('./api/note')

router.use('/note', apiNoteRouter)

module.exports = router;