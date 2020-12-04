import { authentificat } from '../handlers';

const authRoutes = (app) => {
  app.route('/auth').post((req, res) => authentificat(req, res));
};

export default authRoutes;
