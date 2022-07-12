const asyncHandler = require('express-async-handler');

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('All Fields Must Be Valid!');
  }

  console.log(req.body);
  res.send('Register User');
});

const loginUser = asyncHandler(async (req, res) => {
  res.send('Login User');
});

module.exports = {
  registerUser,
  loginUser,
};
