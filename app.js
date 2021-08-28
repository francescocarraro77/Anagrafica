var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static('public'));

var max_id = 0;
var contaelementi=0;

// starting the server
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('Server attivo:' + port);  
});


var localdb = require('./localdb.js');
console.log(localdb.persone);

mongodb = require('./mongodbconnection.js');


app.delete('/api/elimina', function (req, res) {
  res.send('Elimino');
  console.log('Prova');
});

/*
app.delete('/quotes', (req, res) => {
  // Handle delete event here
  console.log("Quotes");
})
*/
/*
app.get('/api/elimina', function (req, res) {
  res.send('Elimino qualcosa');
  console.log("Elimina qualcosa");
});
*/

/*
app.get('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
*/


// Ritorna un singolo product id se presente
app.get('/api/persone/:id', function (req, res) {
  var id = req.params.id;
  var persona = localdb.persone.find( (p) => p.id == id );
  if (id>(localdb.persone.length-1)) // out of range
    res.status(404).send("Record non presente");
  else // in range
    res.status(200).send(persona);

  });

var incrementa = function(a) { 
  return a+1;
}

app.get("/api/inseriscilocale", function(req, res) {
    res.sendFile(path.join(__dirname + '/inseriscilocale.html'));
});

app.get("/api/inseriscimongo", function(req, res) {
  res.sendFile(path.join(__dirname + '/inseriscimongo.html'));
});

app.get("/api/listapersonehtmllocale", function(req, res) {
  res.sendFile(path.join(__dirname + '/listapersonehtmllocale.html'));
});



  app.post("/api/inseriscilocale", function(req,res){



    var persona = 
      {
        id : localdb.persone.length,
        nome : req.body.nome,
        cognome : req.body.cognome,
        anno : req.body.anno
      }

    localdb.persone.push(persona);
    res.send("Inserito in locale");
    console.log("Inserito in locale");
});

var setNumberofDocuments = function(err, count){ 
  if(err) return handleError(err);

  numberofDocs = count;

};

app.post("/api/inseriscimongo", function(req,res){

  const persona = new personaModello({Cognome: req.body.cognome, Nome: req.body.nome, Anno: req.body.anno});

  persona.save(function (err) {
    if (err) return console.error(err);
    console.log("Inserimento effettuato");
  });


  res.send("Inserito in mongo");
  console.log("Inserito in mongo");

});

// Ritorna la lista dei prodotti
app.get('/api/listapersonelocale', function (req, res) {

  var id = req.params.id;
  console.log("Lista persone inserite in locale -> ",localdb.persone.length);
  res.status(200).send(localdb.persone);
  });


