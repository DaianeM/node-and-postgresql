const db = require('./_database');

async function updateData(){
    await db.connect();

    await db.query(`UPDATE participante SET nome = 'Maria' WHERE id = 3`);

    await db.query(`DELETE FROM evento_participante WHERE evento_id = 1 and participante_id = 3`);

    await db.end();

    console.log('Atualização executada com sucesso!');
}

updateData();