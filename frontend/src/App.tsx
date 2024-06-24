import { useState } from 'react'
import PlayerCard from './components/playerCard'
import Team from './components/team'


function App() {
  const [players, _setPlayers] = useState<Player[]>([{
    id: 1,
    name: 'Sachin',
    team: 'India',
    pts: 25,
    expected: 30,
    price: 250000,
    active: true,
    pos: 'GK'
  }, {
    name: "Lionel Messi",
    team: "Argentina",
    pts: 30,
    expected: 30,
    price: 300000,
    id: 2,
    active: false,
    pos: 'GK'
  }])


  return (
    <div className=' grid grid-cols-2 gap-3 p-4  w-fit'>
    {
      players.map((player) => <PlayerCard key={player.id} className='scale-50 origin-top-left' player={player} />)
    }
    <Team formation="4-3-3" />
    </div>
  )
}

export default App
