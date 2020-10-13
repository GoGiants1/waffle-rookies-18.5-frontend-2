import React,{useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useListState,useListMakeAction } from '../Context/List';

function Edit() {
    const history = useHistory();
    const players = useListState();
    const params = useParams();
    const thisPlayer = players.find( player => player.id === +params.id);

    const [inputs, setInputs] = useState(thisPlayer);
    
    const makeAction = useListMakeAction();
    
  
    const onChange = (e) => {
      const { name, value } = e.target;
  
      setInputs({
        ...inputs,
        [name]: value,
      });
    };

    console.log(inputs);

    const { playername, team, position } = inputs ;
    console.log(playername)
    
    const onReWrite = (e) => {
      console.log('다시 쓰기 클릭')
      makeAction({
        type: 'REWRITE',
        player : {
          id: thisPlayer.id,
          playername: playername,
          team: team,
          position: position,
          like: thisPlayer.like
        }
      });
      
      history.push(`/items/${params.id}`);
    };
  
    console.log(players)
  
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
            <button onClick={onReWrite}>
                수정하기
            </button>
            <button onClick={() => history.push(`/items/${thisPlayer.id}`)}>취소</button>
          </ul>
        </p>
      </div>
    );
}


export default Edit;
