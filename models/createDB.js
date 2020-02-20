const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/time_card')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

const member = mongoose.model('member', new mongoose.Schema({
    userName: String,
    isAdmin: Boolean,
    password: String,
    promo_id: BigInt
}));

const info = mongoose.model('info', new mongoose.Schema({
    name: String,
    prenom: String,
    member_id: BigInt,
    email: String,
    addr: String,
    cp: String,
    phone: String,
    sign: String,
    picture: String,
    idPole: String
}));

const date = mongoose.model('date', new mongoose.Schema({
    date_day: Date,
    codex: String
}));

const promo = mongoose.model('promo', new mongoose.Schema({
    promo_name: String,
    start: Date,
    end: Date
}));
async function createPublisher(companyName, firstParty, website) {
    const publisher = new Publisher({
        companyName,
        firstParty,
        website
    });

    const result = await publisher.save();
    console.log(result);
}

async function createGame(title, publisher) {
    const game = new Game({
        title,
        publisher
    });

    const result = await game.save();
    console.log(result);
}

async function listGames() {
    const games = await Game
        .find()
        .select('title');
    console.log(games);
}

createPublisher('Nintendo', true, 'https://www.nintendo.com/');