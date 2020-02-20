const info = require('../model/info');
const member = require('../model/member');

module.exports = {
    create: async(req, res) => {
        const { name, bio, website } = req.body;
        const info = await info.create({
            name,
            bio,
            website
        })

        return res.send(info)
    },

    find: async(req, res) => {
        const info = await info.find()
        return res.send(info)
    },
    postsByinfo: async(req, res) => {
        const { id } = req.params;
        const info = await info.findById(id).populate('posts');

        res.send(info.posts);
    }
}