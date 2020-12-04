import db from '../models';

const addUserService = (newUser) => {
  const user = db.User(newUser);
  const response = user
    .save()
    .then((item) => ({ item, status: 200 }))
    .catch((err) => ({ err, status: 500 }));
  return response;
};

export default addUserService;
