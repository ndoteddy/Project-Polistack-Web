'use strict'

var mongoose = require ('mongoose'),
    Signature = mongoose.model('Signature');

exports.list_all_signatures = function(req,res) {
    Signature.find({}, function (err, signature) {
        if (err)
            res.send(err);
        res.json(signature);
    });
};

exports.create_signatures = function(req,res) {
    var signature = new Signature({
        guestSignature: req.body.SignatureOfGuest,
        message: req.body.MessageofGuest,
    });
    signature.save(function(err, sign) {
        if (err)
            res.send(err);
        res.json(sign);
    });
};
