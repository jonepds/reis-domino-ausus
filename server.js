const express = require("express");
const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/game", (req, res) => {
  res.sendFile(__dirname + "/game.html");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
