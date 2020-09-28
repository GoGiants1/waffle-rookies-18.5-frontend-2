import React from 'react';


function Player({ player, onToggle }) {
  return (
    <div>
      <b>{player.playername}</b> 포지션:{player.position} &nbsp;
      <span>소속 구단: {player.team} &nbsp;&nbsp;
      <button onClick={() => onToggle(player.id)} style={{
          color: player.like ? 'red' : 'black'
        }}>좋아요</button>
      </span>
    </div>
  );
}

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