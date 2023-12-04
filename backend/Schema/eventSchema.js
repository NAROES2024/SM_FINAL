const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    sm_id: { type: String, required: true },
    college: { type: String, required: true },
    contact: { type: String, required: true },
    event: { type: String, required: true },
    orderId: { type: String, required: true },
    paymentId: { type: String },
    teammembers: { type: Array},
    created_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Event', eventSchema);