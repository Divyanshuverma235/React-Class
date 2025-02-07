const Pool = require("pg").Pool;

function connectionObj(){
   
    const  pool= new Pool ({
        user:"postgres",
        host:"localhost",
        database : "mydbexpress",
        password:"123456",
        port:5432,
        max : 100,
    });
    return pool;
}
module.exports = {  connectionObj };