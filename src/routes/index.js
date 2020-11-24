import { user, getUsers } from '../handlers';

const routes = (app) => {
    app.route('/user').post((req, res) => user(req, res));
    app.route('/user').get((req, res) => getUsers(req, res));
}

export default routes;