import {
  addUser, getUsers, deleteUser, updateUser,
} from '../handlers';
import { authorisation } from '../middelware';

const userRoutes = (app) => {
  app.route('/user').post(authorisation(), (req, res) => addUser(req, res));
  app.route('/user').get(authorisation(), (req, res) => getUsers(req, res));
  app.route('/user').delete((req, res) => deleteUser(req, res));
  app.route('/user').patch((req, res) => updateUser(req, res));
};

export default userRoutes;
