import { user, getUsers, deleteUser, updateUser } from '../handlers';

const routes = (app) => {
    app.route('/user').post((req, res) => user(req, res));
    app.route('/user').get((req, res) => getUsers(req, res));
    app.route('/user').delete((req, res) => deleteUser(req, res));
    app.route('/user').patch((req, res) => updateUser(req, res));
}

export default routes;