const { Router } = require('express');
const Users = require('../models/Users');
const bcrypt = require('bcryptjs');

const router = Router();

router.post('/signup', async (req, res) => {
  const { fullname, username, email, password } = req.body;

  const saltPassword = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, saltPassword);

  const signedupUser = new Users({
    fullname,
    username,
    email,
    password: hashedPassword,
  });
  signedupUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
