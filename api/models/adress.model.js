import mongoose from "mongoose";

// Address schema
const addressSchema = new mongoose.Schema({
    company_name: { type: String, required: false },
    country: { type: String, required: true, maxlength: 50 },
    city: { type: String, required: true, maxlength: 50 },
    zip: { type: String, required: true, maxlength: 5 },
    fax: { type: String, required: false, maxlength: 20 },
    phone: { type: String, required: false, maxlength: 20 },
    street: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: false, maxlength: 50 }
  });

export default mongoose.model('Address', addressSchema);
