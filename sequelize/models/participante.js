const Sequelize = require('sequelize');
const sequelize =  require('../_database');

const Participante = sequelize.define('participante',{
    nome:{
        type: Sequelize.STRING
    },
});

module.exports = Participante;

//relacionamento com a tabela evento
const Evento = require('./evento');
Participante.belongsToMany(Evento, {through: 'evento_participante'});