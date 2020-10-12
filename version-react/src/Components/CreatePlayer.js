import React, { useState } from "react";
import { useListMakeAction, useNextId } from "../Context/List";

const defaultPlayer = {
  playername: "",
  team: "",
  position: "",
  like: false,
};

function CreatePlayer() {
  const [inputs, setInputs] = useState(defaultPlayer);
  

  const makeAction = useListMakeAction();
  const nextId = useNextId();

  
  

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
        </ul>
      </p>
    </div>
  );
}

export default CreatePlayer;
