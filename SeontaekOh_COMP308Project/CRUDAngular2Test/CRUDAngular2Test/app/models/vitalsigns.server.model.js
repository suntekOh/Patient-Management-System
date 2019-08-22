const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VitalSignSchema = new Schema({

    patient: {
        type: Schema.ObjectId,
        ref: 'User',
        required: 'Patient cannot be blank'
    },
    temperature: {
        type: Number,
         required: 'Temperature cannot be blank'
    },
    heartRate: {
        type: Number,
        required: 'Heart Rate cannot be blank'
    },
    bloodPressure: {
        type: Number,
        required: 'Blood Pressure cannot be blank'
    },
    respiratoryRate: {
        type: Number,
        required: 'Respiratory Rate cannot be blank'
    },
    weight: {
        type: Number,
        required: 'Weight cannot be blank'
    },
    measuredDate: {
        type: Date,
        required: 'Measured Data cannot be blank'
    },
    created: {
        type: Date,
        default: Date.now
    },
    taker: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});


mongoose.model('VitalSigns', VitalSignSchema);
