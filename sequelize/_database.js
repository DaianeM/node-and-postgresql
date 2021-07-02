const Sequelize = require('sequelize');

const sequelize =  new Sequelize({
    host: 'localhost',
    database: 'postgres',
    username: 'postgres',
    password: 'postgres',
    dialect: 'postgres',
    port: 5432,
    logging: true
});

module.exports = sequelize;

//testando conexão com o banco
async function testConnection(){
    try {
        let result = await sequelize.authenticate();
        console.log('Sequelize realizou a conexão ao DB com sucesso!');
    } catch (error) {
        console.log('Houve um erro ao conectar o DB');
        console.log(error);
        process.exit();
    }
}

testConnection();