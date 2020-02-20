const Member = require('../model/members')

exports.connexion = (req, res, next) => {
    Member.findOne({ userName: req.body.username })
    .then(Member => {
      if (!Member) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, Member.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          
          res.status(200).json({ ' le membre existe dans la base de données '});
        })
        .catch(error => res.status(500).json({ error: "2" }));
    })
    .catch(error => res.status(500).json({ error: 'membre introuvable dans la base de données' }));
};