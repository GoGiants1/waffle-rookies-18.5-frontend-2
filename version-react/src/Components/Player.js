import React from 'react';
import { useListMakeAction } from '../Context/List';
import {useHistory} from 'react-router-dom';

function Player({ playername, position,team, like , id}) {
  const history = useHistory();
  const makeAction = useListMakeAction();
  const toDetails = () => {
    const { confirm }  = window
    
    const back = confirm('상세 페이지로 이동')

    if (back) history.push(`/items/${id}`)
  }

  

  const onToggle = () => makeAction({type: 'LIKE', id} );
  return (
    
    <div>
      <b onClick={toDetails}>{playername}</b> 포지션:{position} &nbsp;
      <span>소속 구단: {team} &nbsp;&nbsp;
      <button onClick={onToggle} style={{
          color: like ? 'red' : 'black'
        }}>좋아요</button>
      </span>
    </div>
  
  );
}

export default Player;