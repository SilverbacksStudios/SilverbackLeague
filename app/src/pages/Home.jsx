import "../App.css";
import { useState, useEffect } from "react";
import { supabase } from "../Database/supabase";
import { useAuth } from "./Auth";
import { useRef } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({ name: "", points: "" });
  const { name, points } = player;
  const ref = useRef(null);
  const [firstPointsValue, setFirstPointsValue] = useState(3);
  const [secPointsValue, setSecPointsValue] = useState(1);
  const [firstPlaceName, setFirstPlaceName] = useState(""); // Add this line
  const [secondPlaceName, setSecondPlaceName] = useState("");

  const handleFirstPointsChange = (e) => {
    setFirstPointsValue(parseInt(e.target.value) || 0);
  };

  const handleSecPointsChange = (e) => {
    setSecPointsValue(parseInt(e.target.value) || 0);
  };

  function matchCard() {
    const results = ref.current;
    if (results.style.display !== "none") {
      results.style.display = "none";
    } else {
      results.style.display = "flex";
    }
  }
  const formRef = useRef(null);
  async function addPoints(event) {
    event.preventDefault(); // Prevent form submission

    const form = formRef.current;

    if (form) {
      const firstPointsValue = parseInt(form[0].value) || 3;
      const secPointsValue = parseInt(form[1].value) || 1;

      // Call firstPoints and secPoints to update the player's points
      await firstPoints();
      await secPoints();

      // Fetch updated players after updating points
      fetchPlayers();
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

  async function firstPoints() {
    const { data: playerData, error } = await supabase
      .from("players")
      .select("points")
      .eq("name", firstPlaceName)
      .single();

    if (error) {
      console.error("Error fetching player data:", error.message);
      return;
    }

    const currentPoints = playerData.points || 0;
    await supabase
      .from("players")
      .update({ points: currentPoints + firstPointsValue })
      .eq("name", firstPlaceName);
  }

  async function secPoints() {
    const { data: playerData, error } = await supabase
      .from("players")
      .select("points")
      .eq("name", secondPlaceName)
      .single();

    if (error) {
      console.error("Error fetching player data:", error.message);
      return;
    }

    const currentPoints = playerData.points || 0;
    await supabase
      .from("players")
      .update({ points: currentPoints + secPointsValue })
      .eq("name", secondPlaceName);
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
      <div
        id="matchTabell"
        className="matchTabell"
        style={{ display: "none" }}
        ref={ref}
      >
        <form ref={formRef}>
          <input
            type="hidden"
            title="Första plats i finalen"
            placeholder="Första plats"
            value={firstPointsValue}
            onChange={handleFirstPointsChange}
          />
          <input
            type="hidden"
            title="Andra plats i finalen"
            placeholder="Andra plats"
            value={secPointsValue}
            onChange={handleSecPointsChange}
          />
          <input
            title="Namn för första plats"
            placeholder="Namn för första plats"
            value={firstPlaceName}
            onChange={(e) => setFirstPlaceName(e.target.value)}
          />
          <input
            title="Namn för andra plats"
            placeholder="Namn för andra plats"
            value={secondPlaceName}
            onChange={(e) => setSecondPlaceName(e.target.value)}
          />
        </form>
        <button className="matchbutton" onClick={addPoints}>
          Submit
        </button>
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
