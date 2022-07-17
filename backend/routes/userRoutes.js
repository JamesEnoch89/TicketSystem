const express = require('express');
const router = express.Router();
const { protectRoute } = require('../middleware/authMiddleware');
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require('../controllers/userController');

router.post('/register222', registerUser);
router.post('/login', loginUser);
router.get('/user', protectRoute, getCurrentUser);

module.exports = router;
