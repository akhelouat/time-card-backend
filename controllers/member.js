const member = require('../model/member');
const promo = require('../model/promo');
const info = require('../model/info');

module.exports = {
    create: async(req, res) => {
        const { name, bio, website } = req.body;
        const member = await member.create({
            name,
            bio,
            website
        })

        return res.send(member)
    },

    find: async(req, res) => {
        const member = await member.find()
        return res.send(member)
    },
    postsBymember: async(req, res) => {
        const { id } = req.params;
        const member = await member.findById(id).populate('posts');

        res.send(member.posts);
    }
}