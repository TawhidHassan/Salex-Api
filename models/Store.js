const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema(
    {
        storename: {
            type: String,
            required: true,
        },
        storedmscode: {
            type: String,
            required: true,
        },
        storedmscode: {
            type: String,
            required: true,
        },
        storetype: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        teritory: {
            type: String,
            required: true,
        },
        area: {
            type: String,
            required: true,
        },
        district: {
            type: String,
            required: true,
        },
        division: {
            type: String,
            required: true,
        },

        lat: {
            type: String,
            required: true,
        },
        lon: {
            type: String,
            required: true,
        },
        cutofftime: {
            type:String,
            required: false
        },
    },
    { timestamps: true }
)






const Store = mongoose.model('Store', storeSchema);

module.exports = Store;