import mongodb from 'mongodb';
import db from '../models';

const { ObjectId } = mongodb;

const deleteUserService = (id) => {
  const user = db.User;
  const response = user
    .deleteOne({ _id: new ObjectId(id) })
    .then(() => ({ message: `user with id: ${id} is deleted`, status: 200 }))
    .catch((err) => ({ err, status: 500 }));
  return response;
};

export default deleteUserService;
