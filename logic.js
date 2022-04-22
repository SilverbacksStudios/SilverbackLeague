import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))


const app = express()
const port = 3000;

const scores = {
  markus: 0,
  martin: 1,
  jocke: 1337,
};

app.use(express.static(join(__dirname, "public")));

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

app.post("/player/add", function (req, res){
  if ((req.query.player === "") || (req.query.player === undefined)) {
    return res.status(400).send("No player name given");
    }
  
  if (scores[req.query.player] !== undefined){
    return res.status(403).send("Player name taken"); 
   } 
   scores[req.query.player] = 0; 


   res.status(200).send(scores);
})

app.listen(port, () => console.log("listening on port" + port))