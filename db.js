var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',	
  database : 'test_blast',
});

let output;
  
const setOutput = (rows) => {
    output = rows;
    console.log(output);
}

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM information', function (error, results, rows, fields) {
    if (error){
        throw error;
    }
    setOutput(results);

    // results.forEach(result => {
    //     console.log('result :', result);
    // });
});