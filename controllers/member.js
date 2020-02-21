const TmMember = require('../models/date')

exports.addMember = (req, res, next) => {
const member = new TmMember({
username: req.body.username,
password: req.body.password,
isAdmin: req.body.isAdmin,
promo:req.body.promo,
info:req.body.info
});
          const myvar = req.body.date_day
          member.save()
        .then(() => res.status(201).send({ myvar}))
        .catch(error => res.status(400).send({ error }));
        next();
    
    };

exports.getMembers = (req, res, next) => {
    TmMember.find()
        .then(TmMember => res.status(200).send(TmMember))
        .catch(TmMember => res.status(400).send({ TmMember }));
        next();
    
};