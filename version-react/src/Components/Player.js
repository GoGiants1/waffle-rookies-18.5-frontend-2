import React from 'react';
import { useListMakeAction } from '../Context/List';


function Player({ playername, position,team, like , id}) {
  
  const makeAction = useListMakeAction();
  const onToggle = () => makeAction({type: 'LIKE', id} );
  return (
    <div>
      <b>{playername}</b> 포지션:{position} &nbsp;
      <span>소속 구단: {team} &nbsp;&nbsp;
      <button onClick={onToggle} style={{
          color: like ? 'red' : 'black'
        }}>좋아요</button>
      </span>
    </div>
  );
}

export default Player;