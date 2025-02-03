const con = require ("../db/connobjpgsql");
const pool = con.connectionObj();
const dbfun1 = (req,res) =>{
    pool.query 
    {
        "SELECT * from table1 WHERE id = $1",
        [req.prams.id]
    }
}