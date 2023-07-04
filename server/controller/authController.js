// import bcrypt from 'bcrypt';
const Users = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = process.env.JWT_SECRET_KEY;

class AuthController {
  constructor() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      let isExisting = await Users.findOne({ email: email });
      if (isExisting) {
        return res.status(409).json({ error: 'user is already exist' });
      }

      const hash = await bcrypt.hash(password, 10);
      const newUser = await Users.create({
        name,
        email,
        password: hash,
      });
      const token = await jwt.sign({ userId: newUser._id, email: newUser.email }, secretKey, {
        expiresIn: '1h',
      });
      return res.status(200).json({ msg: 'user created successfully', token, newUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'server error', error });
    }
  }

  async login(req, res) {
    try {
      let { email, password } = req.body;
      let userData = await Users.findOne({ email });
      console.log('LOG ~ file: authController.js:39 ~ login ~ userData:', userData);
      if (!userData) {
        return res.status(409).json({ msg: 'user not found' });
      }
      const isCorrectPassword = await bcrypt.compare(password, userData.password);
      console.log('LOG ~ file: authController.js:44 ~ login ~ isCorrectPassword:', isCorrectPassword);
      if (!isCorrectPassword) {
        return res.status(409).json({ msg: 'invalid password' });
      }
      const token = await jwt.sign({ userId: userData._id, email: userData.email }, secretKey, {
        expiresIn: '1h',
      });
      return res.status(201).json({ msg: 'success', token, data: userData });
    } catch (error) {
      return res.status(500).json({ err: 'something went wrong' });
    }
  }
}

module.exports = new AuthController();
