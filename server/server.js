require('./config/config');

// Este es el server de npm express

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Get: petición para
app.get("/usuario", function (req, res) {
  res.json("get Usuario");
});

// Post: petición para crear registros
app.post("/usuario", function (req, res) {
  let body = req.body;

  if (body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      mensaje: "El nombre es necesario",
    });
  } else {
    res.json({
      persona: body,
    });
  }
});

// Put and Patch: petición para actualizar registros
app.put("/usuario/:id", function (req, res) {
  let id = req.params.id;

  res.json({
    id,
  });
});

// Delete: petición para actualizar registros
app.delete("/usuario", function (req, res) {
  res.json("delete Usuario");
});
app.listen(process.env.PORT, () => {
  console.log("Escuchando puerto: ", process.env.PORT);
});
