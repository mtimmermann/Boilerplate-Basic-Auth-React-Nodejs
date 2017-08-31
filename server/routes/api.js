const express = require('express');
const router = express.Router();

const messageController = require('../api/controllers/messageController');

// GET /api/message/message1
router.get('/message/message1', messageController.getMessage1);

// GET /api/message/message2
router.get('/message/message2', messageController.getMessage2);

module.exports = router;
