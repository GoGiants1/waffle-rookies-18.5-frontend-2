import React, {  useRef, useState } from 'react';
import Modal from 'react-modal';

import './App.css';
import CreatePlayer from './CreatePlayer';
import PlayerList from './PlayerList';


function App() {
    function countLikes(players){
      return players.filter(player => player.like).length;
    }

    const defaultState= {
      playername:'',
      team:'',
      position:'',
      like:false
    };
    
    const [inputs, setInputs] = useState(defaultState);
    const { playername, team, position, like } = inputs;

    const onChange = e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    };

    const defaultPlayer=[
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
    ]

    const [players, setPlayers] = useState(defaultPlayer);
  
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

    const onToggle = id => {
      setPlayers(
        players.map(player =>
          player.id === id ? { ...player, like: !player.like } : player
        )
      );
    };
    
    const count = countLikes(players);
    
    const[modalIsOpen,setModalIsOpen] = useState(false)
    

  return (
    <div className="App">
      
      <button onClick={() => setModalIsOpen(true)}>야구 선수 추가하기</button>
        <Modal isOpen={modalIsOpen}>
          <CreatePlayer
            {...inputs}
            onChange={onChange}
            onCreate={onCreate}
          />
          <div>
            <button onClick={() => setModalIsOpen(false)}>닫기</button>
          </div>
        </Modal>
      
      
        <p>   
        좋아하는 야구 선수 수: {count}
        </p>
      <>
      
      <PlayerList players={players} onToggle={onToggle}/>
      </>
    </div>
  );
  
}

export default App;
