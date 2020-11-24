import { getUsersService } from '../services';

const getUsers = async (req, res) => {
    const response = await getUsersService();
    res.json(response);
}

export default getUsers;