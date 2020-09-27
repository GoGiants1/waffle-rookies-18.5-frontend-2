import React from 'react';
import Counter from './Counter';
import LikeButton from './LikeButton';

function Player({ player }) {
  return (
    <div>
      <b>{player.playername}</b> <b>포지션:{player.position}</b> <span>소속 구단:({player.team}) <LikeButton></LikeButton> </span>
    </div>
  );
}

function PlayerList({players}) {
  return (
    <div>
      {players.map(player => (
        <Player player={player} key={player.id} />
      ))}
    </div>
  );
}

export default PlayerList;