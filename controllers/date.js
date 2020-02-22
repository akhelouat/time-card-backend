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





