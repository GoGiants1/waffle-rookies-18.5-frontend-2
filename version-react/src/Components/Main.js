import React from "react";
import PlayerList from "./PlayerList";
import { useListState } from "../Context/List";

import {useHistory} from 'react-router-dom';


const Main = () => {
  const players = useListState(); 
  const history = useHistory();

  const counts = players.filter( player => player.like);

  return (
    <div className="App">

      <button onClick={()=> history.push(`/items/create`) }>야구 선수 추가하기</button>

      <p>좋아하는 야구 선수 수: {counts.length}</p>
      <>
        <PlayerList/>
      </>
    </div>
  );
};

export default Main;
