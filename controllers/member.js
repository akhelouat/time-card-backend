const Member = require('../models/member')

function updater(id, param, body, res, msg, error) {
    Myinfo.updateMany({
        _id: id
    },
    {
        $set: {[param]: body}
    })
    .then(() => res.status(200).send(msg))
    .catch(()=> res.status(400).send(error));
    
}

exports.addMember = (req, res, next) => {
    const member = new Member({
        nom: req.body.nom,
        prenom: req.body.prenom,
        username: req.body.prenom[0] + req.body.nom,
        isAdmin: req.body.isAdmin,
        promo: req.body.promo,
        email: req.body.email,
        addr: req.body.addr,
        cp: req.body.cp,
        phone: req.body.phone,
        sign: req.body.sign,
        picture: req.body.picture,
        idPole: req.body.idPole 
    });
    member.save()
        .then(() => res.status(201).send(req.body.prenom + " " + req.body.nom + " a été rajouté à la base de données"))
        .catch(error => res.status(400).send({ error }));

};

exports.getMember = (req, res, next) => {
    Member.find()
        .then(Member => res.status(200).send(Member))
        .catch(Member => res.status(400).send({
            Member
        }));
};

exports.updateMember = (req, res, next) => {
    if (req.body._id) {
        var msg = [];
        var err = [];
    if (req.body.password && typeof req.body.password === String) {
        msg.push('success password');
        err.push('error password');
        updater(req.body._id, 'password', req.body.password, res, msg);
    }
    if (req.body.nom && typeof req.body.nom === String) {
        msg.push('success nom');
        err.push('error nom');
        updater(req.body._id, 'nom', req.body.nom, res);
    }
    if (req.body.prenom && typeof req.body.prenom === String) {
        msg.push('success prenom');
        err.push('error prenom');
        updater(req.body._id, 'prenom',req.body.prenom, res, msg);
    }
    if (req.body.email && typeof req.body.email === String) {
        msg.push('success email');
        err.push('error email');
        updater(req.body._id, 'email',req.body.email, msg, err);
    }
    if (req.body.addr && typeof req.body.addr === String) {
        msg.push('success addr');
        err.push('error addr');
        updater(req.body._id, "addr", req.body.addr, msg, err);
    }
    if (req.body.cp && typeof req.body.cp === Number) {
        msg.push('success cp');
        err.push('error cp');
        updater(req.body._id, "cp", req.body.cp, msg, err);
    }
    if (req.body.phone && typeof req.body.phone === Number) {
        msg.push('success phone');
        err.push('error phone');
        updater(req.body._id, "phone", req.body.phone, msg, err);
    }
    if (req.body.sign && typeof req.body.sign === String) {
        msg.push('success sign');
        err.push('error sign');
        updater(req.body._id, "sign", req.body.sign, msg, err);
    }
    if (req.body.picture && typeof req.body.picture === String) {
        msg.push('success picture');
        err.push('error picture');
        updater(req.body._id, "picture", req.body.picture, msg, err);
    }
    if (req.body.idPole && typeof req.body.idPole === String) {
        msg.push('success idPole');
        err.push('error idPole');
        updater(req.body._id, "idPole", req.body.nom, msg, err);
    }
    } 
    else {
        res.status(400).send('problème : il faut préciser l\'id de l\'étudiant ')

    }
};

exports.deleteMember = (req, res, next) => {
    if (req.body._id) {
        Member.deleteOne({
                _id: req.body._id
            })
            .then(() => res.status(200).send('la suppression a bien été effectuée'))
            .catch(() => res.status(400).send('l\'id fournit ne match avec aucun étudiant, veuillez renvoyer une autre requete'))
    } else {
        res.status(400).send('problème : il faut préciser l\'id de l\'étudiant ')
    }
};
