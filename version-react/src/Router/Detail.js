import React, {useState, useEffect} from 'react';
import {useHistory, useParams } from 'react-router-dom';

import axios from 'axios'

function Detail() {
    const params = useParams();
    const [player, setPlayer] = useState();
    const fetchPlayer= () =>{
        axios.get(`http://localhost:4000/players/${params.id}`)
        .then(response =>{
            const {data} = response;
            setPlayer(data);    
        })
    }
    

    useEffect(()=>{
      fetchPlayer();
    },[]);
    

    console.log('상세페이지')

    const history = useHistory();

    const {playername, position, team, id} = player || {};

    const onRemove = (() => {
        axios.delete(`http://localhost:4000/players/${params.id}`)
        history.replace('/items')
        }
    );


    return (
        <>
            <p>Now showing post {params.id} </p>
            
            <div>
                <b>{playername}</b> 포지션:{position} &nbsp;
                <span>소속 구단: {team} </span>
                <button onClick={()=>history.push(`/items/${player.id}/edit`)}>수정하기</button>
                <button onClick={onRemove}>삭제</button>
                <button onClick={() => history.push('/items')}>홈으로</button>
            </div> 

    
        </>
    );
  
}

export default Detail;
