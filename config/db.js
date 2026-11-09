const { alternatives } = require('joi');
const db = require('../models');
const { Model } = require('sequelize');

async function connectionDatabase() {
    try{
        await db.sequelize.authenticate();
        console.log('Database connection has been established succesfully.');

        await db.sequelize.sync({alter: true});
        console.log('Database syncronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        process.exit(1);
    }
}

module.exports = connectionDatabase;