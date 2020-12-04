import { deleteUserService } from '../services';

const deleteUser = async (req, res) => {
  const { body } = req;
  const { id } = body;
  if (!id) {
    res.json({ status: 300, message: 'some fields are missing!' });
  } else {
    const response = await deleteUserService(id);
    console.log('response', response);
    res.json(response);
  }
};

export default deleteUser;
