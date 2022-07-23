const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Ticket = require('../models/ticketModel');

const getTickets = asyncHandler(async (req, res) => {
  // const user = {
  //   user: req.user._id,
  // };
  res.status(200).json({ message: 'get tickets success' });
});

const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'create ticket success' });
});

module.exports = {
  getTickets,
  createTicket,
};
