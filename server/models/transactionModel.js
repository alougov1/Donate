import mongoose, {
    Schema
} from 'mongoose';
import ItemModel from "./itemModel";

/**
 * Represents a transaction that a user can send to us.
 */
const TransactionScheme = new Schema({
    _id: String,
    userID: String,
    // list of item IDs
    items: [String],
    state: ['creating', 'processing','done'],
    pickupSchedule: {
        startWindow: Number,
        endWindow: Number
    }
});

export default mongoose.model('TransactionModel', TransactionScheme);
