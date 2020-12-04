import { updateUserService } from '../services';

const updateUser = async (req, res) => {
  const { body } = req;
  const { status } = body;

  const newUser = {
    userStatus: status,
  };
  const response = await updateUserService(newUser);
  console.log('response', response);
  res.json(response);
};

export default updateUser;
