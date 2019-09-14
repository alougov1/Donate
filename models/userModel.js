import mongoose, {
    Schema
} from 'mongoose';

/**
 * Create database scheme for notes
 */
const UserScheme = new Schema({
    id: {
        type: Number,
        required: "What is the user's ID?"
    },
    email: {
        type: String,
        required: "What is the user's email?"
    },
    // need to hash this
    password: {
        type: String,
        required: "Password"
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
});

export default mongoose.model('UserModel', UserScheme);
