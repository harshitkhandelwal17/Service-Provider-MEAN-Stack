const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProviderSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  position: { type: String, required: true },
  company: {
    company_name: String,
    address: { type: String, required: true },
    address2: String,
    phone: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    postal_code: { type: String, required: true },
    state: { type: String, required: true },
    description: String,
    tagline: String,
  },
});

const ProviderModel = mongoose.model("Provider", ProviderSchema);

module.exports = { ProviderModel };
