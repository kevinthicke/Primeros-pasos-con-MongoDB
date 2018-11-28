const mongodb = require('mongodb');

let MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost:27017/moviesDB', (err, db) => {
    let collection = db.collection('movies');
    collection.findOne({
        id: 1
    }).then(movie => console.log(movie));
});
