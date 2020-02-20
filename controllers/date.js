const date = require('../models/date');

exports.addDate = (req, res, next) => {
const date = new TmDate({
date_day: req.body.date_day,
codex: req.body.codex
});
          const myvar = req.body.date_day
        date.save()
        .then(() => res.status(201).json({ myvar}))
        .catch(error => res.status(400).json({ error }));
    
    };

    exports.getDate = (req, res, next) => {
        TmDate.find()
        .then(TmDate => res.status(200).json(TmDate))
        .catch(TmDate => res.status(400).json({ TmDate }));
    
    };