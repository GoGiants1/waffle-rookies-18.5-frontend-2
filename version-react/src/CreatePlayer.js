import React from 'react';

function CreatePlayer({ playername, team, position, onChange, onCreate }) {
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
        <button onClick={onCreate}>등록</button>
      </ul>
    </p>
    </div>
  );
}

export default CreatePlayer;