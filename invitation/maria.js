const maria = require('mysql');
const conn = maria.createConnection({
    host:'localhost',
    port:3306,
    user:'invitation',
    password:'Qwer1234!@',
    database:'invitation'
});
module.exports = conn;
