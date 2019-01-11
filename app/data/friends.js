// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../server.js");

// Creates a "Chirp" model that matches up with DB
var friend = sequelize.define("friend", {
    name: Sequelize.STRING,
    photo: sequelize.STRING,
    scores: [
        sequelize.INTEGER,
        sequelize.INTEGER,
        sequelize.INTEGER,
        sequelize.INTEGER,
        sequelize.INTEGER,
        sequelize.INTEGER,
        sequelize.INTEGER,
        sequelize.INTEGER,
        sequelize.INTEGER,
        sequelize.INTEGER
    ]

}, {
        timestamps: false
    });

// Syncs with DB
friend.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = friend;


