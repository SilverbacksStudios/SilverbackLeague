import "../App.css";
import { useState, useEffect } from "react";
import { supabase } from "../Database/supabase";
import Layout from "../components/Layout";
import { useAuth } from "./Auth";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({ name: "", points: "" });
  const { name, points } = player;

  function matchCard() {
    var results = document.getElementById("matchTabell");
    if (results.style.display !== "none") {
      results.style.display = "none";
    } else {
      results.style.display = "flex";
    }
  }

  const auth = useAuth();

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function fetchPlayers() {
    const { data } = await supabase.from("players").select();

    setPlayers(data);
  }

  async function createPlayer() {
    await supabase
      .from("players")
      .insert([{ name, points: 0 }])
      .single();

    setPlayer({ name: "", points: 0 });
    fetchPlayers();
  }

  async function addPoints(players, event) {
    await supabase
      .from("players")
      .update({ points: players.points + 1 })
      .match({ id: players.id });

    fetchPlayers();
  }
  return (
    <div className="App">
      <div className="fixHome">
        <input
          placeholder="Namn"
          value={name}
          onChange={(e) => setPlayer({ ...player, name: e.target.value })}
        />
        <button className="button" onClick={createPlayer}>
          Add Silverback
        </button>
      </div>
      <div className="match">
        <button className="matchbutton" onClick={matchCard}>
          Match Report
        </button>
      </div>
      <div id="matchTabell">
        <button className="matchbutton">Submit</button>
      </div>
      
      <div className="Players">
        {players
          .sort((a, b) => b.points - a.points)
          .map((player) => (
            <div className="Player" key={players.id}>
              <h3>{player.name}</h3>
              <p>{player.points}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
//onClick={(event) => addPoints(player, event)}
