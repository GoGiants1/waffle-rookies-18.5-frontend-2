import React, { Component, useRef, useState } from 'react';

import './App.css';

import Counter from './Counter';
import CreatePlayer from './CreatePlayer';
import PlayerList from './PlayerList';


class ListHead extends Component{
  render(){
    return (
      <header>
            <h2>
                <button>야구 선수 추가하기</button>
            </h2>
            <p>
              좋아하는 야구 선수 수:<Counter></Counter>
            </p>
      </header>

    );
  }
}
function App() {
  
    const [inputs, setInputs] = useState({
      playername: '',
      team: '',
      position: '',
      like : false
    });
    const { playername, team, position, like } = inputs;

    const onChange = e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    };

    const [players, setPlayers] = useState( [
      {
        id: 1,
        playername: '이대호',
        team: '롯데 자이언츠',
        position: '지명타자',
        like : false
      },
      {
        id: 2,
        playername: '손아섭',
        team: '롯데 자이언츠',
        position: '우익수',
        like : false
      },
      {
        id: 3,
        playername: '김원중',
        team: '롯데 자이언츠',
        position: '마무리 투수',
        like : false
      }
    ]);
  
    const nextId = useRef(4);
    
    const onCreate = () => {
      const player = {
        id: nextId.current,
        playername,
        team,
        position,
        like
      };
      setPlayers([...players, player]);
  
      setInputs({
        playername: '',
        team: '',
        position: '',
        like: false
      });
      nextId.current += 1;
    };
  



  return (
    <div className="App">
      <ListHead></ListHead>
      <>
      <CreatePlayer
          playername={playername}
          team={team}
          position={position}
          like = {like}
          onChange={onChange}
          onCreate={onCreate}
        />
      <PlayerList players={players}></PlayerList>
      </>
    </div>
  );
  
}

export default App;
