import React from 'react';
import Player from './Player';
import {useListState} from '../Context/List'





function PlayerList() {
  const players = useListState();
  
  
  return (
    <div>
      {players.map( player => (
        <Player 
            playername={player.playername}
            key={player.id}
            id = {player.id}
            like = {player.like}
            position ={player.position}
            team = {player.team}
        />
      ))}
    </div>
  );
}

export default PlayerList;