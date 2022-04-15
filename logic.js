const express = require("express");
const path = require("path");

const app = express()
const port = 3000;

const scores = {
  markus: 0,
  martin: 1,
  jocke: 1337,
};

app.use(express.static(path.join(__dirname, "public")));

app.get("/scores", function (_, res) {
  res.status(200).send(scores);
})

app.post("/scores/add", function (req, res) {
  if (req.query.player === undefined) {
    return res.status(400).send("No player name given");
  }

  const score = scores[req.query.player];
  if (score === undefined) {
    scores[req.query.player] = 0;
  } else {
    scores[req.query.player]++;
  }

  res.status(200).send(scores);
})

app.listen(port, () => console.log("listening on port" + port))