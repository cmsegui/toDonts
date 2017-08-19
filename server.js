const express = require('express'); 
const app = express(); 
const hbs = require('hbs');

const port = process.env.PORT || 3000; 



app.set("view engine", "hbs");


app.get('/toDonts', function(req, res) {
    console.log(req.query);
    
    res.render('toDonts', {
      data: req.query.saying
    });
});




app.get('/', function(req, res) { 
  res.send('Does this shit work?');
});


app.listen(port, function() {
  console.log('Start listening on port ' + port);
}); 