const Member = require('../models/member')

function updater(id, param, body, res, msg, error) {
    Myinfo.updateMany({
            _id: id
        }, {
            $set: {
                [param]: body
            }
        })
        .then(() => res.status(200).send(msg))
        .catch(() => res.status(400).send(error));

}

exports.addMember = (req, res, next) => {
    const member = new Member({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        username: req.body.firstName[0] + req.body.lastName,
        isAdmin: req.body.isAdmin,
        namePromo: req.body.namePromo,
        mail: req.body.mail,
        address: req.body.address,
        addressCP: req.body.addressCP,
        mobileNumber: req.body.mobileNumber,
        sign: req.body.sign,
        picture: req.body.picture,
        poleEmploiNumber: req.body.poleEmploiNumber
    });
    member.save()
        .then(() => res.status(201).send(req.body.firstName + " " + req.body.lastName + " a été rajouté à la base de données"))
        .catch(error => res.status(400).send({ error }));

};

exports.getMember = (req, res, next) => {
    Member.find()
        .then(Member => res.status(200).send(Member))
        .catch(Member => res.status(400).send({
            Member
        }));
};

exports.getOneMember = (req, res, next) => {
    Member.find({ _id: req.body._id })
        .then(Member => res.status(200).send(Member))
        .catch(Member => res.status(400).send({
            Member
        }));
};

exports.getMemberByPromo = (req, res, next) => {
    Member.find({ namePromo: req.body.promo })
        .then(Member => res.status(200).send(Member))
        .catch(Member => res.status(400).send({
            Member
        }));
};

exports.getMemberForConnection = (req, res, next) => {
    Member.findOne({ username: req.body.username })
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
        if (req.body.lastName && typeof req.body.lastName === String) {
            msg.push('success lastName');
            err.push('error lastName');
            updater(req.body._id, 'lastName', req.body.lastName, res);
        }
        if (req.body.lastName && typeof req.body.firstName === String) {
            msg.push('success firstName');
            err.push('error firstName');
            updater(req.body._id, 'firstName', req.body.firstName, res, msg);
        }
        if (req.body.mail && typeof req.body.mail === String) {
            msg.push('success mail');
            err.push('error mail');
            updater(req.body._id, 'mail', req.body.mail, msg, err);
        }
        if (req.body.address && typeof req.body.address === String) {
            msg.push('success address');
            err.push('error address');
            updater(req.body._id, "address", req.body.address, msg, err);
        }
        if (req.body.addressCP && typeof req.body.addressCP === Number) {
            msg.push('success addressCP');
            err.push('error addressCP');
            updater(req.body._id, "addressCP", req.body.addressCP, msg, err);
        }
        if (req.body.mobileNumber && typeof req.body.mobileNumber === Number) {
            msg.push('success mobileNumber');
            err.push('error mobileNumber');
            updater(req.body._id, "mobileNumber", req.body.mobileNumber, msg, err);
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
        if (req.body.poleEmploiNumber && typeof req.body.poleEmploiNumber === String) {
            msg.push('success poleEmploiNumber');
            err.push('error poleEmploiNumber');
            updater(req.body._id, "poleEmploiNumber", req.body.lastName, msg, err);
        }
    } else {
        res.status(400).send('problème : il faut préciser l\'id de l\'étudiant')

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