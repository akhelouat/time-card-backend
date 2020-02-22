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