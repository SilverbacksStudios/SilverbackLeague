import "../App.css";
import { useState, useEffect } from "react";
import { supabase } from "../Database/supabase";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({ name: "", points: "" });
  const { name, points } = player;

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

  async function addPoints(player, event) {
    await supabase
      .from("players")
      .update({ points: player.points + 1 })
      .match({ id: player.id });

    fetchPlayers();
  }

  return (
    <div className="App">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setPlayer({ ...player, name: e.target.value })}
      />

      <button className="button" onClick={createPlayer}>
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
                className="button"
                onClick={(event) => addPoints(player, event)}
              >
                Add Bananas
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
