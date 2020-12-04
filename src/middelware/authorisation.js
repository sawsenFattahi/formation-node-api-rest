import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const { TOKENSECRET } = process.env;
const authorization = () => (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const cleanToken = token.split('Bearer ')[1];
    try {
      jwt.verify(cleanToken, TOKENSECRET);
      next();
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(400).send('Server requires application/json');
  }
};

export default authorization;
