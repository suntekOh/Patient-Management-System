const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmergencyAlertSchema = new Schema({

    patient: {
        type: Schema.ObjectId,
        ref: 'User',
        required: 'Patient cannot be blank'
    },
    description: {
        type: String,
    },    
    state: {
        type: String,
    },    
    responder: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    created: {
        type: Date,
        default: Date.now
    },
    responded: {
        type: Date
    }
});

mongoose.model('EmergencyAlert', EmergencyAlertSchema);
