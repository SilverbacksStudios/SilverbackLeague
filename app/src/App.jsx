import './App.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabase'


function App() {
  const [players, setPlayers] = useState ([])
  const [player, setPlayer] = useState ({ name: "", points: ""})
  const { name, points } = player
  useEffect(() => {
    fetchPlayers()
  }, [])
  async function fetchPlayers(){
    const { data } = await supabase
      .from('players')
      .select()
    setPlayers(data)
    console.log("data: ", data)
  }
  async function createPlayer(){
    await supabase
     .from('players')
     .insert([
        { name, points }
     ])
       .single()
      setPlayer({ name: "", points: ""})
      fetchPlayers()
  }
  return (
    <div className="App">
    <input
     placeholder='Name'
     value={name}
     onChange={e => setPlayer({ ...player, name: e.target.value})}
     />
     <input
     placeholder='Points'
     value={points}
     onChange={e => setPlayer({ ...player, points: e.target.value})}
     />
     <button onClick={createPlayer}>Create Player</button>
     {  
       players.map(player => (
        <div key={players.id}>
         <h3>{player.name}</h3>
         <p>{player.points}</p>
        </div>
       ))
     }
    </div>
  )
}

export default App

