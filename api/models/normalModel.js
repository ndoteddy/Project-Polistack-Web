'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema ({
    name :
        {
            type:String,
            required: 'Kindly enter the name of the task'
        },
    Created_date:
        {
            type :Date,
            default:Date.now
        },
    status:
        {
            type:[{
                type:String,
                enum :['pending','ongoing','completed']
            }],
            default : ['pending']
        }


    });



var SignatureSchema = new Schema({
    guestSignature: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    message: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
});

var taskSchema = mongoose.model('Tasks', TaskSchema,'Test');
var SignatureSchema = mongoose.model('Signature', SignatureSchema,'Test');

module.exports={

    Tasks:taskSchema,
    Signature:SignatureSchema

};