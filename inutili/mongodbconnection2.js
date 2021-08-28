
var persona1 = {
    id : 15,
    cognome : "Carraro",
    nome : "Giorgia",
};

/*
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://User:Useraccess@cluster0.dd8e5.mongodb.net/DBAnagrafica?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("DBAnagrafica").collection("Anagrafica");
  // perform actions on the collection object

    console.log(collection);
    client.close();
});
*/


/*
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://User:Useraccess@cluster0.dd8e5.mongodb.net/DBAnagrafica?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Siamo connessi");

});
*/

/*
var subject = {
    id : 1,
    title : "Basic Data Structures",
    duration : "90h",
    content : [
        "Lists",
        "Trees",
        "Graphs"
    ]
};
*/




/* 
const anagraficaSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    cognome: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    }
})
*/

//const Post = mongoose.model('Post', postSchema);

//export default Post




