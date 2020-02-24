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
        .then(() => res.status(201).json({
            myvar
        }))
        .catch(error => res.status(400).json({
            error
        }));
};

exports.getInfo = (req, res, next) => {
    Myinfo.find()
        .then(Myinfo => res.status(200).json(Myinfo))
        .catch(Myinfo => res.status(400).json({
            Myinfo
        }));

};



exports.updateInfo = (req, res, next) => {
    if (req.body.nom) {
        Myinfo.updateMany({
                _id: req.body._id
            }, {
                $set: {
                    nom: req.body.nom
                }
            })
            .then(Myinfo => res.status(200).send('le nom a bien été changé en ' + req.body.nom + ' || '))
            .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if (req.body.prenom) {
        Myinfo.updateMany({
                _id: req.body._id
            }, {
                $set: {
                    prenom: req.body.prenom
                }
            })
            .then(Myinfo => res.status(200).send('le nom a bien été changé en ' + req.body.prenom + ' || '))
            .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if (req.body.email) {
        Myinfo.updateMany({
                _id: req.body._id
            }, {
                $set: {
                    email: req.body.email
                }
            })
            .then(Myinfo => res.status(200).send('l\'email a bien été changé en ' + req.body.email + ' || '))
            .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if (req.body.addr) {
        Myinfo.updateMany({
                _id: req.body._id
            }, {
                $set: {
                    addr: req.body.addr
                }
            })
            .then(Myinfo => res.status(200).send('l\'adresse a bien été changé en ' + req.body.addr + ' || '))
            .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if (req.body.cp) {
        Myinfo.updateMany({
                _id: req.body._id
            }, {
                $set: {
                    cp: req.body.cp
                }
            })
            .then(Myinfo => res.status(200).send('l\'adresse postale a bien été changée en ' + req.body.cp + ' || '))
            .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if (req.body.phone) {
        Myinfo.updateMany({
                _id: req.body._id
            }, {
                $set: {
                    phone: req.body.phone
                }
            })
            .then(Myinfo => res.status(200).send('le numéro de téléphone a bien été changé en ' + req.body.phone + ' || '))
            .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if (req.body.sign) {
        Myinfo.updateMany({
                _id: req.body._id
            }, {
                $set: {
                    sign: req.body.sign
                }
            })
            .then(Myinfo => res.status(200).send('la signature a bien été changée en ' + req.body.email + ' || '))
            .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if (req.body.picture) {
        Myinfo.updateMany({
                _id: req.body._id
            }, {
                $set: {
                    picture: req.body.picture
                }
            })
            .then(Myinfo => res.status(200).send('la photo a bien été changée en ' + req.body.addr + ' || '))
            .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
    if (req.body.idPole) {
        Myinfo.updateMany({
                _id: req.body._id
            }, {
                $set: {
                    idPole: req.body.idPole
                }
            })
            .then(Myinfo => res.status(200).send('le numéro pole emploi a bien été changé en ' + req.body.addr + ' || '))
            .catch(Myinfo => res.status(400).send('problème : aucune modifications de faite'));
    }
};

exports.deleteInfo = (req, res, next) => {
    if (req.body._id) {
        Myinfo.deleteOne({
                _id: req.body._id
            })
            .then(() => res.status(200).send('la suppression a bien été effectuée'))
            .catch(() => res.status(400).send('l\'id fournit ne match avec aucun étudiant, veuillez renvoyer une autre requete'))
    } else {
        res.status(400).send('problème : il faut préciser l\'id de l\'étudiant ')
    }
};