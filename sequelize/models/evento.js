const Sequelize = require('sequelize');
const sequelize = require('../_database');

const Evento = sequelize.define('evento', {
    nome: {
        type: Sequelize.STRING
    },
});

module.exports = Evento;

//relacionamento com  a tabela participante
const Participante = require('./participante');
Evento.belongsToMany(Participante, {through: 'evento_participante'});
