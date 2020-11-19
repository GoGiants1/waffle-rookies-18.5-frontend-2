import React,{useState, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios'

function Edit() {
    const history = useHistory();
    const params = useParams();

    const [playername, setName] = useState('')
    const [team, setTeam] = useState('')
    const [position, setPosition] = useState('')
    

    const onReWrite = () => {
      const inputs={
        playername: playername,
        team: team,
        position: position
      }
      axios.put(`http://localhost:4000/players/${params.id}`, {
        inputs
      } )
      history.replace(`/items/${params.id}`)
    };

    useEffect(()=>{
      const path = history.location.pathname
      console.log(path)
      if(!currentUser && path !=="/signup" && path !=="/signin"){
        history.replace('/signin')
      }


      axios.get(`http://localhost:4000/players/${params.id}`)
        .then(response =>{
            const {data} = response;
            setName(data.playername)
            setPosition(data.position)
            setTeam(data.team)
        })
    },[]);
    
  
  
    return (
      <div>
        <p>
          <ul>
            <li>
              <input
                name="playername"
                placeholder="선수명"
                value={playername}
                onChange={(event)=> setName(event.target.value)}
              />
            </li>
  
            <li>
              <input
                name="position"
                placeholder="포지션"
                value={position}
                onChange={(event)=> setPosition(event.target.value)}
              />
            </li>
            <li>
              <input
                name="team"
                placeholder="소속 구단"
                value={team}
                onChange={(event)=> setTeam(event.target.value)}
              />
            </li>
            <button onClick={onReWrite}>
                수정하기
            </button>
            <button onClick={() => history.push(`/items/${params.id}`)}>취소</button>
          </ul>
        </p>
      </div>
    );
}


export default Edit;
