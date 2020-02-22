const Member = require('../models/member')

exports.addMember = (req, res, next) => {
    const member = new Member({
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
          
            
        

};

exports.getMember = (req, res, next) => {
    Member.find()
        .then(Member => res.status(200).send(Member))
        .catch(Member => res.status(400).send({ Member }));
  
          
            
        

};