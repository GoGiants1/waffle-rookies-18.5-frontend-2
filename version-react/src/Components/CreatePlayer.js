import React, { useState } from "react";
import { useListMakeAction, useNextId , useListState } from "../Context/List";
import {useHistory} from 'react-router-dom';






const defaultPlayer = {
  playername: "",
  team: "",
  position: "",
  like: false,
};

function CreatePlayer() {
  const history = useHistory();
  const players = useListState();

  
  const [inputs, setInputs] = useState(defaultPlayer);
  

  const makeAction = useListMakeAction();
  const nextId = useNextId();

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
    makeAction({
      type: 'CREATE',
      player : {
        id: nextId.current,
        playername: playername,
        team: team,
        position: position,
        like:false
      }
    });
    
    nextId.current += 1;
    history.push(`/items/${nextId.current-1}`);
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
