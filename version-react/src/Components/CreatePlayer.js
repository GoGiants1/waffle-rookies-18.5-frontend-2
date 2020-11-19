import React, { useEffect, useState } from "react";

import {useHistory} from 'react-router-dom';
import axios from 'axios'
import {useUserContext} from '../Context/UserContext'




const defaultPlayer = {
  playername: "",
  team: "",
  position: "",
  like: false,
  userId: ""
};

function CreatePlayer() {
  const{currentUser,setCurrentUser} = useUserContext();

  const fetchData= () =>{
    axios.get('http://localhost:4000/players')
    .then(response =>{
      const {data} = response;
      setPlayers(data);
    })
  }


  const history = useHistory();


  const [players,setPlayers] = useState([]);

  useEffect(()=>{
    const path = history.location.pathname
    console.log(path)
    if(!currentUser && path !=="/signup" && path !=="/signin"){
      history.replace('/signin')
    }
    fetchData();
  },[])
  console.log('test')

  const len = players.length

  const [count,setCount] = useState(len);
  const [inputs, setInputs] = useState(defaultPlayer);
  

  // const makeAction = useListMakeAction();
  // const nextId = useNextId();

  const wantCancle = () => {
    const { confirm }  = window

    const isBack = confirm('정말로 취소하시겠습니까??')

    if (isBack) history.push('/items')
  }
  

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { playername, team, position } = inputs;

  const onCreate = e => {
    e.preventDefault();
    axios.post('http://localhost:4000/players', {
      playername, team, position, like: false
    })
    fetchData();
    setCount(players.length)
    history.push(`/items/${len+1}`);
  };

 


  return (
    <div>
      <p>
        <ul>
          <li>
            <input
              name="playername"
              placeholder="선수명"
              onChange={onChange}
              value={playername}
            />
          </li>

          <li>
            <input
              name="position"
              placeholder="포지션"
              onChange={onChange}
              value={position}
            />
          </li>
          <li>
            <input
              name="team"
              placeholder="소속 구단"
              onChange={onChange}
              value={team}
            />
          </li>
          
            <button onClick={onCreate}>
              등록
            </button>
        
          <button onClick={wantCancle}>취소</button>
        </ul>
      </p>
    </div>
  );
}

export default CreatePlayer;
