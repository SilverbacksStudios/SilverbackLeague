import "../App.css";
import { useState, useEffect } from "react";
import { supabase } from "../Database/supabase";

export default function startpage() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({ name: "", points: "" });
  const { name, points } = players;

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function fetchPlayers() {
    const { data } = await supabase.from("players").select();

    setPlayers(data);
  }
  return (
    <div className="Playersstart">
      {players
        .sort((a, b) => b.points - a.points)
        .map((player) => (
          <div className="Player" key={players.id}>
            <h3>{player.name}</h3>
            <p>{player.points}</p>
          </div>
        ))}
    </div>
  );
}
