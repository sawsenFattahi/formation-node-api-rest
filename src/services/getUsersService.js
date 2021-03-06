import db from '../models';

const getUsersSevice = () => {
  const user = db.User;
  const response = user
    .find()
    .then((list) => ({ list, status: 200 }))
    .catch((err) => ({ err, status: 500 }));

  return response;
};

export default getUsersSevice;
