import mongoose, {
    Schema
} from 'mongoose';
import ItemModel from "./itemModel";
import UserModel from "./userModel";

/**
 * Represents a transaction that a user can send to us.
 */
const TransactionScheme = new Schema({
    id: String,
    user: UserModel,
    items: [ItemModel],
    state: ['creating', 'processing','done'],
    pickupSchedule: {
        startWindow: Number,
        endWindow: Number
    }
});

export default mongoose.model('TransactionModel', TransactionScheme);
