const Myinfo = require('../models/info')

exports.addInfo = (req, res, next) => {
  const theinfo = new Myinfo({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    addr: req.body.addr,
    cp: req.body.cp,
    phone: req.body.phone,
    sign: req.body.sign,
    picture: req.body.picture,
    idPole: req.body.idPole
  });
  const myvar = req.body.nom
  theinfo.save()
.then(() => res.status(201).json({ myvar}))
.catch(error => res.status(400).json({ error }));
};

    exports.getInfo = (req, res, next) => {
        Myinfo.find()
      .then(Myinfo => res.status(200).json(Myinfo))
      .catch(Myinfo => res.status(400).json({ Myinfo }));
    
};



exports.updateInfo = (req, res, next) => {
    if(req.body.nom) {
        Myinfo.updateMany({_id : req.body._id }, { $set: { nom: req.body.nom } })
        .then(Myinfo => res.status(200).send('le nom a bien été changé en ' + req.body.nom + ' || '))
        .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if(req.body.prenom) {
        Myinfo.updateMany({_id : req.body._id }, { $set: { prenom: req.body.prenom } })
        .then(Myinfo => res.status(200).send('le nom a bien été changé en ' + req.body.prenom + ' || '))
        .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if(req.body.email) {
        Myinfo.updateMany({_id : req.body._id }, { $set: { email: req.body.email } })
        .then(Myinfo => res.status(200).send('l\'email a bien été changé en ' + req.body.email + ' || '))
        .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if(req.body.addr) {
        Myinfo.updateMany({_id : req.body._id }, { $set: { addr: req.body.addr } })
        .then(Myinfo => res.status(200).send('l\'adresse a bien été changé en ' + req.body.addr + ' || '))
        .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
   


};