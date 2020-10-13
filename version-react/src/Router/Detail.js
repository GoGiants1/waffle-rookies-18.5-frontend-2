import React from 'react';
import {useHistory, useParams } from 'react-router-dom';
import { useListState,useListMakeAction } from '../Context/List';
 

function Detail() {
    const params = useParams();

    const players = useListState();
    const history = useHistory();
    const makeAction = useListMakeAction();

    

    const thisPlayer = players.find( player => player.id === +params.id);

    const {playername, position, team,id} = thisPlayer || {};

    const onRemove = (() => {
        makeAction({type:'REMOVE', id})
        history.push('/items')
        }
    );
    console.log(params);
    console.log(players);
    console.log(thisPlayer);

    return (
        <>
            <p>Now showing post {params.id} </p>
            
            <div>
                <b>{playername}</b> 포지션:{position} &nbsp;
                <span>소속 구단: {team} </span>
                <button onClick={()=>history.push(`/items/${thisPlayer.id}/edit`)}>수정하기</button>
                <button onClick={onRemove}>삭제</button>
                <button onClick={() => history.push('/items')}>홈으로</button>
            </div> 

    
        </>
    );
  
}

export default Detail;
