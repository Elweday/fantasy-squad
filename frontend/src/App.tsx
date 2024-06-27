import { useState } from 'react'
import PlayerCard from './components/playerCard'
import Team from './components/team'
import {
  useQuery,
} from 'react-query'
import getPLayers from './data/getPlayers'


function App() {

  const { data: players } = useQuery('players', getPLayers)
  console.log(players)
  return (
    <div className=' grid grid-cols-2 gap-3 p-4  w-fit'>
    {
      players?.map((player) => <PlayerCard key={player.id} className='scale-50 origin-top-left' player={player} />)
    }
    <Team formation="4-3-3" />
    </div>
  )
}

export default App
