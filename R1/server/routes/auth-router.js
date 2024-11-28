const express = require('express');
const router = express.Router();
const {home, register, address} = require('../controllers/auth-controller');

router.route('/').get(home);

router.route('/register').get(register);

router.get('/login', (req, res) => {
  res.status(200).send('Welcome to the login');
});

router.route('/logout').get((req, res) => {
  res.status(200).send('Welcome to the logout');
});

router.route('/address field').get((req, res)=>{
  res.status(400).send('welcome to the address field');
})


module.exports = router;