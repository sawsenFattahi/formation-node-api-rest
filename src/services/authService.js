import db from '../models';

const getUsersSevice = (userLogin) => {
  const user = db.User;
  const response = user.findOne({ userLogin })
    .then((item) => ({ user: item, status: 200 }))
    .catch((err) => ({ err, status: 500 }));
  return response;
};

export default getUsersSevice;
