import { user } from '../handlers';

export default (app) => {
    app.route('/user').get((req,res) => user(req, res))
}