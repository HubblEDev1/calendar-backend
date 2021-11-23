const mongoose = require('mongoose');

const dbConnection = async() => {
    try {

        mongoose.connect(process.env.DB_CNN);
        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error initializating DB');
    }
}

const quotes = async() => {
    const res = await fetch('https://www.breakingbadapi.com/api/quotes');
    const data = await res.json();

    console.log(data);
}


module.exports = {
    dbConnection,
    quotes
}