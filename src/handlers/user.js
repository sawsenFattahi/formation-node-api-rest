import Cryptr from 'cryptr';
import UIDGenerator from 'uid-generator';
import { addUserService } from '../services';

const addUser = async (req, res) => {
    const { body } = req;
    const { name, login, password } = body;
    if( !name || !login || !password ) {
       res.json({ status: 300, message: 'some fields are missing!'}); 
    } else {
        const uidgen = new UIDGenerator();
        const userId = uidgen.generateSync();
        const cryptr = new Cryptr('mysecretkeyworld');
        const encryptedString = cryptr.encrypt(password);
        const newUser = {
            userId,
            userLogin: login,
            userName: name,
            userPassword: encryptedString
        }
        const response = await addUserService(newUser);
        console.log('response', response)
        res.json(response);

    }
}

export default addUser;
