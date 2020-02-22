const Mypromo = require('../models/promo')

exports.addPromo = (req, res, next) => {
  const thepromo = new Mypromo({
    name: req.body.name,
start: req.body.start,
end: req.body.end
  });
  const myvar = req.body.name
  thepromo.save()
.then(() => res.status(201).json({ myvar}))
.catch(error => res.status(400).json({ error }));
};

    exports.getPromo = (req, res, next) => {
        Mypromo.find()
      .then(Mypromo => res.status(200).json(Mypromo))
      .catch(Mypromo => res.status(400).json({ Mypromo }));
    
};

exports.updatePromo = (req, res, next) => {
  if (req.body._id) {
     if(req.body.name) {
      Member.updateMany({_id : req.body._id }, { $set: { name: req.body.name } })
      .then(Myinfo => res.status(200).send('le nom de la promo a bien été changé en ' + req.body.username + ' || '))
      .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
     }
     if(req.body.start) {
      Member.updateMany({_id : req.body._id }, { $set: { start: req.body.start } })
      .then(Myinfo => res.status(200).send('la date du début de la promo a bien été changée en '+ req.body.start +'  || '))
      .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
     }
     if(req.body.end) {
      Member.updateMany({_id : req.body._id }, { $set: { end: req.body.end } })
      .then(Myinfo => res.status(200).send('la date de fin de la promo a bien été changée en ' + req.body.end + ' || '))
      .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
     }
  }
  else
     {
      res.status(400).send('problème : il faut préciser l\'id de l\'étudiant ')

     }
  };