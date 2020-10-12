import React from 'react';
import Player from './Player';

function PlayerList({players, onToggle}) {
  return (
    <div>
      {players.map(player => (
        <Player 
            player={player}
            key={player.id} 
            onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default PlayerList;