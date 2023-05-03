var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca'
});

con.connect(
    (err)=>{
        if(!err){
            console.log('Conexion Establecida');
        }else{
            console.log('Error de conexion');
        }
    }
);

module.exports = con;