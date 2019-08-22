const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DailyTipsSchema = new Schema({

    patient: {
        type: Schema.ObjectId,
        ref: 'User',
        required: 'Patient cannot be blank'
    },
    tips: {
        type: String,
        required: 'Tips cannot be blank'
    },    
    url4video: {
        type: String
    },  
    creator: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('DailyTips', DailyTipsSchema);
