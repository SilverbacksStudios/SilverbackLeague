import "../App.css";
import { useState, useEffect } from "react";
import { supabase } from "../Database/supabase";
import Layout from "../components/Layout";
import { useAuth } from "./Auth";
import { useRef } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({ name: "", points: "" });
  const { name, points } = player;
  const ref = useRef(null);
  

  function matchCard() {
    const results = ref.current;
    if (results.style.display !== "none") {
      results.style.display = "none";
    } else {
      results.style.display = "flex";
    }
  }

  function addPoints(player, event) {
    // Get the number of points to add from the event
    const points = event.points;
  
    // Use a for loop to add the points to the player's score
    for (let points = 0; i < points; points++) {
      player.score++;
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
      <div id="matchTabell" className="matchTabell" style={{ display: 'none' }} ref={ref}>
        <input title="Första plats i finalen"
        placeholder="Första plats"
         placeOne></input>
        <input title="Andra plats i finalen"
        placeholder="Andra plats"
         placeTwo></input>
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
