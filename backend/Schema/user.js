const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    sm_id: { type: String, required: true },
    college: { type: String, required: true },
    contact: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    token : String,
    resetToken: String,
    orderId: String,
});


module.exports = mongoose.model('User', userSchema);