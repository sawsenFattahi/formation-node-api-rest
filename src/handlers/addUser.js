import bcrypt from 'bcrypt';
import UIDGenerator from 'uid-generator';
import { addUserService } from '../services';

const addUser = async (req, res) => {
  const { body } = req;
  const { name, login, password } = body;
  if (!name || !login || !password) {
    res.json({ status: 300, message: 'some fields are missing!' });
  } else {
    const uidgen = new UIDGenerator();
    const userId = uidgen.generateSync();
    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);
    const encryptedPassword = bcrypt.hashSync(password, salt);
    console.group(encryptedPassword, '======');
    const newUser = {
      userId,
      userLogin: login,
      userName: name,
      userPassword: encryptedPassword,
    };
    const response = await addUserService(newUser);
    console.log('response', response);
    res.json(response);
  }
};

export default addUser;
