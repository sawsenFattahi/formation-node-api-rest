import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { authService } from '../services';

dotenv.config();
const TOKENSECRET = process.env.TOKENSECRET;
const authentificat = async (req, res) => {
  const { body } = req;
  const { login, password } = body;
  if (!login || !password) {
    res.json({ status: 300, message: 'some fields are missing!' });
  } else {
    const response = await authService(login);
    const {
      user: { userPassword, _id },
    } = response;
    const match = await bcrypt.compare(password, userPassword);
    if (match) {
      const token = jwt.sign({ id: _id }, TOKENSECRET, {
        expiresIn: 86400, // expires in 24 hours
      });

      res.json({ message: 'success', token, status: 200 });
    } else {
      res.json({ message: 'login and/or password not correct', status: 300 });
    }
  }
};

export default authentificat;
