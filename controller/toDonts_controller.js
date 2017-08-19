const express = require('express');
const router = express.Router();
const data = require('../data');

router.get('/', function(req,res) {
  res.render('toDonts/index', {
    toDonts: data.seededtoDonts
  });
});

router.get('/new', (req, res) => {
  res.render('toDonts/new');
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const toDont = data.seededtoDonts[id];
  res.render('toDonts/show',{
    toDont: toDont,
    id: id
  });
});

router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  const toDont = data.seededtoDonts[id];
  res.render("toDonts/edit", {
    toDont: toDont,
    id: id
  })
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const todo = data.seededtoDonts[id];
  todo.description = req.body.description;
  todo.urgent = req.body.urgent;
  res.method = "GET";
  res.redirect(`/toDonts/${id}`);
});

router.post('/', (req, res) => {
  console.log(req.body);

  const newTodo = {
    description: req.body.description,
    urgent: req.body.urgent
  };
  data.seededtoDonts.push(newTodo);

  res.redirect("/toDonts");
});

router.delete('/:id', (req, res) => {
  data.seededtoDonts.splice(req.params.id, 1);

  res.method= "GET";
  res.redirect("/toDonts");
});


module.exports = router;
