const Member = require('../models/member')
const bcrypt = require('bcrypt')

/*
function updater(id, param, body, res, msg, err) {
    Member.updateOne({
            _id: id
        }, {
            $set: {
                [param]: body
            }
        })
        

}; */



const defaultPassword = '1234';

exports.addMember = (req, res, next) => {
    const member = new Member({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        username: req.body.firstName[0] + req.body.lastName,
        password: bcrypt.hashSync(defaultPassword, 5),
        isAdmin: req.body.isAdmin,
        namePromo: req.body.namePromo,
        mail: req.body.mail,
        address: req.body.address,
        addressCP: req.body.addressCP,
        mobileNumber: req.body.mobileNumber,
        sign: req.body.sign,
        picture: req.body.picture,
        poleEmploiNumber: req.body.poleEmploiNumber,
        presence: req.body.presence
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
    Member.find({ _id: req.params._id })
        .then(Member => res.status(200).send(Member))
        .catch(Member => res.status(400).send({
            Member
        }));
};

exports.getMemberByPromo = (req, res, next) => {
    Member.find({ namePromo: req.params.promo })
        .then(Member => res.status(200).send(Member))
        .catch(Member => res.status(400).send({
            Member
        }));
};

exports.login = (req, res, next) => {
    Member.findOne({ username: req.body.username })
        .then(Member => {
            if (!Member) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, Member.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }

                    res.status(200).send(Member);
                })
                .catch(error => res.status(500).json({ error: "2" }));
        })
        .catch(error => res.status(500).json({ error: '1' }));
};


exports.updateMember = (req, res, next) => {
    if (req.body._id) {
        if (req.body.username) {
            Member.updateMany({ _id: req.body._id }, { $set: { username: req.body.username } })
                .then(() => res.status(200).send('le username a bien été changé en ' + req.body.username + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.password) {
            Member.updateMany({ _id: req.body._id }, { $set: { password: req.body.password } })
                .then(() => res.status(200).send('le mot de pass a bien été changé  || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.isAdmin) {
            Member.updateMany({ _id: req.body._id }, { $set: { isAdmin: req.body.isAdmin } })
                .then(() => res.status(200).send('le status administrateur a bien été changé en ' + req.body.isAdmin + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.firstName) {
            Member.updateMany({ _id: req.body._id }, { $set: { firstName: req.body.firstName } })
                .then(() => res.status(200).send('le nom a bien été changé en ' + req.body.firstName + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.lastName) {
            Member.updateMany({ _id: req.body._id }, { $set: { lastName: req.body.lastName } })
                .then(() => res.status(200).send('le nom a bien été changé en ' + req.body.lastName + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.mail) {
            Member.updateMany({ _id: req.body._id }, { $set: { mail: req.body.mail } })
                .then(() => res.status(200).send('l\'email a bien été changé en ' + req.body.mail + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.address) {
            Member.updateMany({ _id: req.body._id }, { $set: { address: req.body.address } })
                .then(() => res.status(200).send('l\'adresse a bien été changé en ' + req.body.address + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.addressCP) {
            Member.updateMany({ _id: req.body._id }, { $set: { addressCP: req.body.addressCP } })
                .then(() => res.status(200).send('l\'adresse postale a bien été changée en ' + req.body.addressCP + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.mobileNumber) {
            Member.updateMany({ _id: req.body._id }, { $set: { mobileNumber: req.body.mobileNumber } })
                .then(() => res.status(200).send('le numéro de téléphone a bien été changé en ' + req.body.mobileNumber + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.picture) {
            Member.updateMany({ _id: req.body._id }, { $set: { picture: req.body.picture } })
                .then(() => res.status(200).send('la photo a bien été changée en ' + req.body.addr + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.poleEmploiNumber) {
            Member.updateMany({ _id: req.body._id }, { $set: { poleEmploiNumber: req.body.poleEmploiNumber } })
                .then(() => res.status(200).send('le numéro pole emploi a bien été changé en ' + req.body.poleEmploiNumber + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
        if (req.body.isSigned) {
            Member.updateMany({ _id: req.body._id }, { $set: { isSigned: req.body.isSigned } })
                .then(() => res.status(200).send('la presence a ete changer ' + req.body.isSigned + ' || '))
                .catch(() => res.status(400).send('problème : aucune modifications de faite'));
        }
    } else {
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


exports.setUnsigned = (req, res, next) => {
    Member.updateMany({ $set: { isSigned: false } })
    .then(() => res.status(200).send('l\'adresse a bien été changé en ' + req.body.address + ' || '))
    .catch(() => res.status(400).send('problème : aucune modifications de faite'));
}