//metodo sera assincrono, nao irá retornar um valor imediatamente
async function connect() {

    //variavel global para armazenar um pool de conexões
    if(global.connection)
        return global.connection.connect();

    const {Pool} = require('pg');
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    })
    
    const client = await pool.connect();
    console.log("Criou o pool de conexão");

    const res = await client.query('select now()');
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
        return pool.connect();
}

    connect();

   async function selectCustomers(){
        const client = await connect();
        const res = await client.query("SELECT * FROM Clientes");
            return res.rows;
    }

    module.exports = {
        selectCustomers
    }