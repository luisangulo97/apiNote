const { Sequelize } = require('sequelize');

const NoteModel = require('./models/note');

const sequelize = new Sequelize('bd_note', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

const Note = NoteModel(sequelize, Sequelize);

sequelize.sync({ force: false    });
console.log('Tablas sincronizadas');

module.exports = {
    Note
}