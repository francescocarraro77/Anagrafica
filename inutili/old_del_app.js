var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static('public'));

var max_id = 0;

// starting the server
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Server attivo: http://localhost:' + port);  
});

var db = require('./db.js');
console.log(db.persone);

//var prodotto = require('./prodotto.js');


// 
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
  var persona = db.persone.find( (p) => p.id == id );
  if (id>(db.persone.length-1)) // out of range
    res.status(404).send("Record non presente");
  else // in range
    res.status(200).send(persona);

  });

var incrementa = function(a) { 
  return a+1;
}


app.get("/api/inserisci", function(req, res) {
    res.sendFile(path.join(__dirname + '/inserisci.html'));
});

app.get("/api/listapersonehtml", function(req, res) {
  res.sendFile(path.join(__dirname + '/listapersone.html'));
});

app.post("/", function(req,res){
    console.log("Ricevuto una richiesta POST");

    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.description);
   

    var persona = 
      {
        id : db.persone.length,
        nome : req.body.nome,
        cognome : req.body.cognome,
        anno : req.body.anno
      }

    db.persone.push(persona);
    //db.products.post(db.products.length,req.body.name,req.body.description);
    res.send("Inserito");
    console.log("Inserisci");
});


// Ritorna la lista dei prodotti
app.get('/api/listapersone', function (req, res) {

  var id = req.params.id;
  console.log("Lista persone -> ",db.persone.length);
  res.status(200).send(db.persone);
  });


