// Reading data from mysql local database
const envVariables = require('./test_data_1.json');
const fs = require('fs');

const { createConnection } = require('mysql')
const connection = createConnection({
    host: "localhost",
    user: "root",
    password: "Bilal@2595",
    database: "userdata",
    connectionLimit: 10,
     
})
console.log('connection to database successful')

connection.query(`select * from userinfo LIMIT 1`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }

    envVariables.empdata[0].userName =  result[0].username;
    envVariables.empdata[0].password =  result[0].password;
    envVariables.empdata[0].clientCode =  result[0].client_code;
    envVariables.empdata[0].email =  result[0].email;
    fs.writeFileSync('../utils/test_data_1.json', JSON.stringify(envVariables));
    // writing username and password  to test_data.json file
    console.log("writing user data to environment file");
})