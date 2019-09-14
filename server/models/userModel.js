import mongoose, {
    Schema
} from 'mongoose';


/**
 * Create database scheme for notes
 */
const UserScheme = new Schema({
    _id: {
        type: Number,
    },
    email: {
        type: String,
    },
    // need to hash this
    password: {
        type: String,
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    country: {
      type: String
    }
}, {versionKey: false});

export default mongoose.model('User', UserScheme);
