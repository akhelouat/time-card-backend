const promo = require('../model/promo');

module.exports = {
    create: async(req, res) => {
        const { name, bio, website } = req.body;
        const promo = await promo.create({
            name,
            bio,
            website
        })

        return res.send(promo)
    },

    find: async(req, res) => {
        const promo = await promo.find()
        return res.send(promo)
    },
    postsBypromo: async(req, res) => {
        const { id } = req.params;
        const promo = await promo.findById(id).populate('posts');

        res.send(promo.posts);
    }
}