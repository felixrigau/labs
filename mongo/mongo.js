const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://admin:felix@ds237620.mlab.com:37620/home';

const dbName = 'home';

MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  
  // Preparamos la base de datos
  const db = client.db(dbName);
  
  const collection = db.collection('todo');
  const usersCollection = db.collection('users');
  
  var user = { 
      "name": "Lucia", 
      "post_count": 5,
      "added_date": new Date()
    };
  
  //insertar
  function addUser(user, callback) {
    usersCollection.insert(user, function(err, result){
      if (err) {
        console.log('Error: ',err)
      } else {
        callback(user, result.ops[0]._id)
      }
    });
  }
  
  function listUsers() {
    usersCollection.find({}).toArray(function(err, docs) {
      if (err) {
        console.log('error', err);
      } else {
        console.log(docs);
      }
    });
  }
  
  function userWithPostMoreThan(count) {
    usersCollection.find({"post_count": {$gt: count}}).toArray(function(err, docs) {
      if (err) {
        console.log('error', err);
      } else {
        console.log(docs);
      }
    });
  }
  
  const showInsertedUser = (data, id) => {
    console.log(`El usuario ${data.name} se ha insertado con el id: ${id}`)
  }
  
  // addUser(user, showInsertedUser);
  
  // listUsers();
  
  userWithPostMoreThan(4)
  
  //Find
  usersCollection.find({"done":true}).toArray(function(err, docs) {
    if (err) {
      console.log('error', err);
    } else {
      console.log('Found the following records', docs);
    }
    console.log("Found the following records");
  });
  
  // Cerramos la conexión
  client.close();
});