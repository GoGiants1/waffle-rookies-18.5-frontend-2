import React, { useContext, useState } from "react";
import PlayerList from "./PlayerList";
import { useListState } from "../Context/List";
import CreatePlayer from "./CreatePlayer";
import Modal from "react-modal";

const Main = () => {
  const players = useListState(); 

  const counts = players.filter( player => player.like);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>야구 선수 추가하기</button>
      <Modal isOpen={modalIsOpen}>
        <CreatePlayer />
        <div>
          <button onClick={() => setModalIsOpen(false)}>닫기</button>
        </div>
      </Modal>

      <p>좋아하는 야구 선수 수: {counts.length}</p>
      <>
        <PlayerList/>
      </>
    </div>
  );
};

export default Main;
