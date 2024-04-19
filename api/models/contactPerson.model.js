import mongoose from "mongoose";

// ContactPerson schema
const contactPersonSchema = new mongoose.Schema({
    first_name: { type: String, required: true, maxlength: 50 },
    last_name: { type: String, required: true, maxlength: 50 },
    email: { type: String, required: true, maxlength: 50, unique: true },
    mobile_phone: { type: String, required: true, maxlength: 20 },
    birth_date: { type: Date, required: true },
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' }
});

export default mongoose.model('ContactPerson', contactPersonSchema);