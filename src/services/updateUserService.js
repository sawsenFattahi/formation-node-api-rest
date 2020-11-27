import db from '../models';

const updateUserService = (id, status) => {
    const user = db.User;
    const response = user.findOneAndUpdate(id, status, { useFindAndModify: false }).then(item => {
        return {item, status: 200};
    }).catch(err => ({err, status: 500}));
    return response;
}

export default updateUserService;