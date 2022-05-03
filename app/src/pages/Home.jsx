import "./Home.css";
import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import { Link } from "react-router-dom";

export function Home() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({ name: "", points: "" });
  const { name, points } = player;

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function fetchPlayers() {
    const { data } = await supabase.from("players").select();

    setPlayers(data);
    console.log("data: ", data);
  }

  async function createPlayer() {
    await supabase
      .from("players")
      .insert([{ name, points: 0 }])
      .single();

    setPlayer({ name: "", points: 0 });
    fetchPlayers();
  }

  async function addPoints(player, event) {
    await supabase
      .from("players")
      .update({ points: player.points + 1 })
      .match({ id: player.id });
    console.log(event.timeStamp);

    fetchPlayers();
  }

  return (
    <div className="App">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setPlayer({ ...player, name: e.target.value })}
      />

      <button class="button" onClick={createPlayer}>
        Add Silverback
      </button>
      <div className="Players">
        {players
          .sort((a, b) => b.points - a.points)
          .map((player) => (
            <div className="Player" key={players.id}>
              <h3>{player.name}</h3>
              <p>{player.points}</p>
              <button
                class="button"
                onClick={(event) => addPoints(player, event)}
              >
                Add Bananas
              </button>
            </div>
          ))}
        <div>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/Login">Login</Link>
            <Link to="/Signup">Signup</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
