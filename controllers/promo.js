const Promo = require('../models/promo')

exports.addPromo = (req, res, next) => {
  const promo = new Promo({
    name: req.body.name,
    start: req.body.start,
    end: req.body.end
  });
  const resultDisplay = req.body.name
  promo.save()
    .then(() => res.status(201).json({
      resultDisplay
    }))
    .catch(error => res.status(400).json({
      error
    }));
};

exports.getPromo = (req, res, next) => {
  Promo.find()
    .then(Promo => res.status(200).json(Promo))
    .catch(Promo => res.status(400).json({
      Promo
    }));

};

exports.updatePromo = (req, res, next) => {
  if (req.body._id) {
    if (req.body.name) {
      Promo.updateMany({
          _id: req.body._id
        }, {
          $set: {
            name: req.body.name
          }
        })
        .then(Myinfo => res.status(200).send('le nom de la promo a bien été changé en ' + req.body.name + ' || '))
        .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if (req.body.start) {
      Promo.updateMany({
          _id: req.body._id
        }, {
          $set: {
            start: req.body.start
          }
        })
        .then(Myinfo => res.status(200).send('la date du début de la promo a bien été changée en ' + req.body.start + '  || '))
        .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if (req.body.end) {
      Promo.updateMany({
          _id: req.body._id
        }, {
          $set: {
            end: req.body.end
          }
        })
        .then(Myinfo => res.status(200).send('la date de fin de la promo a bien été changée en ' + req.body.end + ' || '))
        .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
  } else {
    res.status(400).send('problème : il faut préciser l\'id de l\'étudiant ')

  }
};

exports.deletePromo = (req, res, next) => {
  if (req.body._id) {
    Promo.deleteOne({
        _id: req.body._id
      })
      .then(() => res.status(200).send('la suppression a bien été effectuée'))
      .catch(() => res.status(400).send('l\'id fournit ne match avec aucune promo, veuillez renvoyer une autre requete'))
  } else {
    res.status(400).send('problème : il faut préciser l\'id de la promo ')
  }



};