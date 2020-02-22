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

exports.updateMember = (req, res, next) => {
    if (req.body._id) {
       if(req.body.username) {
        Member.updateMany({_id : req.body._id }, { $set: { username: req.body.username } })
        .then(Myinfo => res.status(200).send('le username a bien été changé en ' + req.body.username + ' || '))
        .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
       }
       if(req.body.password) {
        Member.updateMany({_id : req.body._id }, { $set: { password: req.body.password } })
        .then(Myinfo => res.status(200).send('le mot de pass a bien été changé  || '))
        .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
       }
       if(req.body.isAdmin) {
        Member.updateMany({_id : req.body._id }, { $set: { isAdmin: req.body.isAdmin } })
        .then(Myinfo => res.status(200).send('le status administrateur a bien été changé en ' + req.body.isAdmin + ' || '))
        .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
       }
    }
    else
       {
        res.status(400).send('problème : il faut préciser l\'id de l\'étudiant ')

       }
    };

       exports.deleteMember = (req, res, next) => {
        if(req.body._id)
        {
             Member.deleteOne({_id : req.body._id })
             .then(() => res.status(200).send('la suppression a bien été effectuée'))
             .catch(() => res.status(400).send('l\'id fournit ne match avec aucun étudiant, veuillez renvoyer une autre requete'))
        }
        else
        {
            res.status(400).send('problème : il faut préciser l\'id de l\'étudiant ')
        }       

    

};
