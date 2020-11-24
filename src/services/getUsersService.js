import db from '../models';

const getUsersSevice = () => {
    const user = db.User;
    const response = user.find().then(list => {
        return { list, status: 200 };
    }).catch(err => {
        return { err, status: 500}
    });

    return response;
}

export default getUsersSevice;