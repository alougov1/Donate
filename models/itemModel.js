import mongoose, {
    Schema
} from 'mongoose';

/**
 * Represents an item
 */
const ItemScheme = new Schema({
    id: String,
    brand: String,
    name: String,
    quality: ['used', 'lightly used', 'like new', 'new']
});

export default mongoose.model('ItemModel', ItemScheme);
