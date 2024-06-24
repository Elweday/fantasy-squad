import { useState } from 'react'
import './index.css'
import PlayerCard from './components/playerCard'


function App() {
  const [players, setPlayers] = useState<Player[]>([{
    id: 1,
    name: 'Sachin',
    team: 'India',
    pts: 25,
    expected: 30,
    price: 250000
  }, {
    name: "Lionel Messi",
    team: "Argentina",
    pts: 30,
    expected: 30,
    price: 300000,
    id: 2
  }])


  return (
    <div className=''>
    {
      players.map((player) => <PlayerCard key={player.id} player={player} />)
    }
    </div>
  )
}

export default App
