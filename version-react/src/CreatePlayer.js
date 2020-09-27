import React from 'react';

function CreatePlayer({ playername, team,position, onChange, onCreate }) {
  return (
    <div>
      <input
        name="playername"
        placeholder="선수명"
        onChange={onChange}
        value={playername}
      />

      <input
        name="position"
        placeholder="포지션"
        onChange={onchange}
        value={position}
      />


      <input
        name="team"
        placeholder="소속 구단"
        onChange={onChange}
        value={team}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreatePlayer;