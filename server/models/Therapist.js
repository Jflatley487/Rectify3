const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/rectify', { useNewUrlParser: true, useUnifiedTopology: true });

const therapistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    specialty: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true, 
    },
});

const Therapist = mongoose.model('Therapist', therapistSchema);

module.exports = Therapist;