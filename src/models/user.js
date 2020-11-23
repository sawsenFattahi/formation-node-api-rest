import mongoose from 'mongoose';

const schema = mongoose.Schema;
const UserSchema = schema({
    userId: {
        type: String,
        required: 'userId is required!',
    },
    userName: {
        type: String,
        required: 'userName is required',
    },
    userLogin: {
        type: String,
        required: 'login is required'
    },
    userPassword: {
        type: String,
        required: 'password is required'
    },
    userStatus: {
        type: [{
            Number,
            enum:[1, 2, 3, 4],
        }],
        default:[1]
    },
    userAvatar: {
        type: String,
    },
    userCreatedDate: {
        type: Date,
        default: Date.now
    },
    userLastUpdateDate: {
        type: Date
    }
});

export default mongoose.model('User', UserSchema);