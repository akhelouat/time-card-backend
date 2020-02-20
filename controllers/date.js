const date = require('../model/date');

module.exports = {
    create: async(req, res) => {
        const { date_day, codex } = req.body;
        const date = await date.create({
            date_day,
            codex
        })
        return res.send(date)
    },

    find: async(req, res) => {
        const date = await date.find()
        return res.send(date)
    }
}