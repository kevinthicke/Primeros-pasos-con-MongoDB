const mongodb = require('mongodb');

let MongoClient = mongodb.MongoClient;


MongoClient.connect('mongodb://localhost:27017/moviesDB', (err, db) => {
    let collection = db.collection('movies');
    collection.insertOne({
        id: 4,
        name: "toy story 2",
        year: 1999
    })
    db.close();
});