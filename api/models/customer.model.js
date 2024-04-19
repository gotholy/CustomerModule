import mongoose from "mongoose";

// Customer schema
const CustomerSchema = new mongoose.Schema({
    intnr: { type: String, required: true, unique: true, maxlength: 10 },
    type: { type: String, required: true, enum: ['PRIVATE', 'COMPANY', 'DEALER'] },
    contact_persons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ContactPerson' }],
    addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

export default mongoose.model("Customer", CustomerSchema)