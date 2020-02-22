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