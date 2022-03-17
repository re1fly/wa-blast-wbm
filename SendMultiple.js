const wbm = require('./src/index');
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
      setOutput(Object.values(JSON.parse(JSON.stringify(results))));
  
      // results.forEach(result => {
      //     console.log('result :', result);
      // });
  });

(async () => {
    await wbm.start({showBrowser: true}).then(async () => {
        // const contacts = [
        //     { phone: '62895413548932', name: 'refly', age: 21 },
        //     { phone: '6281385952978', name: 'achmad', age: 33 },
        //     { phone: '6285156474847', name: 'dharma', age: 20 },
            
        // ];
        const message = 'Hi kak {{phone}}, apakah kakak tertarik untuk deposit?';

        
        await wbm.send(output, message);
        await wbm.end();
    }).catch(err => console.log(err));

    // await wbm.start({showBrowser: true}).then(async () => {
    //     await wbm.sendTo({ phone: '62895413548932', name: 'Refly' }, 'Hey {{name}}');
    //     // send: Hey Bruno
    //     await wbm.sendTo('6285156474847', 'Hey Dharma');
    //     // send: Hey man
    //     await wbm.end();
    // });
})();