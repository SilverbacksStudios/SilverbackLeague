import './App.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabase'


function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({ name: "", points: "" });
  const { name, points } = player;

  useEffect(() => {
    fetchPlayers();
  }, []);

  async function fetchPlayers() {
    const { data } = await supabase
      .from('players')
      .select();

    setPlayers(data);
    console.log("data: ", data);
  }

  async function createPlayer() {
    await supabase
      .from('players')
      .insert([
        { name, points }
      ])
      .single();

    setPlayer({ name: "", points: "" });
    fetchPlayers();
  }

  async function addPoints(player)
  {
    await supabase
      .from('players')
      .update({ points: player.points + 1 })
      .match({ id: player.id });

    fetchPlayers();
  }

  return (
    <div className="App">
      <input
        placeholder='Name'
        value={name}
        onChange={e => setPlayer({ ...player, name: e.target.value })}
      />
      <input
        placeholder='Points'
        value={points}
        onChange={e => setPlayer({ ...player, points: e.target.value })}
      />
      <button class="button" onClick={createPlayer}>Create Player</button>
      <div className="Players">
        {
          players
            .sort((a, b) => b.points - a.points)
            .map(player => (
              <div className='Player' key={players.id}>
                <h3>{player.name}</h3>
                <p>{player.points}</p>
                <button class="button" onClick={() => addPoints(player)}>Add points</button>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default App

