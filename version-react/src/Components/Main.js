import React,{useEffect, useState} from "react";

import {useHistory} from 'react-router-dom';
import axios from 'axios'
// import useUserContext from '../Context/UserContext'

const Main = () => {
  // const{currentUser,setCurrentUser} = useUserContext();
  const [userId,setUserId] = useState();
  const [players, setPlayers] = useState([]);
  
  const fetchData= () =>{
    axios.get('http://localhost:4000/players')
    .then(response =>{
      const {data} = response;
      setPlayers(data);
    })
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const history = useHistory();

  const counts = players.filter( player => player.like);
  

  const toDetails = (id) => {
    setUserId(id);
    const { confirm }  = window
    const back = confirm('상세 페이지로 이동')
    if (back) history.push(`/items/${id}`)
  }

  async function onToggle(player) {
    console.log(player)
    await axios.put(`http://localhost:4000/players/${player.id}`, {...player, like: !player.like})
    fetchData();
    console.log(players)
  };

  return (
    <div className="Main">

      <button onClick={()=> history.push(`/items/create`) }>야구 선수 추가하기</button>

      <p>좋아하는 야구 선수 수: {counts.length}</p>
      
      <ul className="players">
        {players.map(player =>(
          <li
            key = {player.id}
            style ={{cursor: 'pointer'}}
          >
          <span onClick ={() => toDetails(player.id)}> <b>{player.playername}</b> &nbsp; 포지션: {player.position} &nbsp; 소속 구단: {player.team} &nbsp;&nbsp;</span>
          <button onClick={() => onToggle(player)} style={{ color: player.like ? 'red' : 'black'}}>좋아요</button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Main;
