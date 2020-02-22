const Mydate = require('../models/date')

exports.addDate = (req, res, next) => {
  const Thedate = new Mydate({
    date_day: req.body.date_day,
codex: req.body.codex
  });
  const myvar = req.body.date_day
  Thedate.save()
.then(() => res.status(201).json({ myvar}))
.catch(error => res.status(400).json({ error }));
};

    exports.getDate = (req, res, next) => {
      Mydate.find()
      .then(Mydate => res.status(200).json(Mydate))
      .catch(Mydate => res.status(400).json({ Mydate }));
    
};


exports.updateDate = (req, res, next) => {
if (req.body._id)
{
  if(req.body.codex) {
    Mydate.updateMany({_id : req.body._id }, { $set: { codex: req.body.codex } })
    .then(Myinfo => res.status(200).send('l\'abdelcodex a été mis à jour ' + req.body.codex + ' || '))
    .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
}
  
}
else
{
  res.status(400).send('problème : il faut préciser l\'id de l\'étudiant ')
}

};


