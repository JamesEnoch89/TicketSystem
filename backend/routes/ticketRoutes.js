const express = require('express');
const router = express.Router();
const { protectRoute } = require('../middleware/authMiddleware');
const {
  getTickets,
  getTicket,
  createTicket,
} = require('../controllers/ticketController');

router
  .route('/')
  .get(protectRoute, getTickets)
  .post(protectRoute, createTicket);

router.route('/:id').get(protectRoute, getTicket);
module.exports = router;
