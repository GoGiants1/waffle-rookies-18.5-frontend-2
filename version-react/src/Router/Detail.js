import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";
import { Button, Comment, Form } from "semantic-ui-react";
import axios from "axios";

function Detail() {
  const history = useHistory();
  const params = useParams();
  const { currentUser } = useUserContext();
  console.log("currUser");
  console.log(currentUser);
  const [player, setPlayer] = useState();

  const [comments, setComments] = useState([]);

  const [Text, setText] = useState('')
  const [currentCommentId, setCurrentCommentId]= useState();
  const [buttonActive, setButtonActive] = useState(false);
  const [reWriteSignal, setRewriteSignal] = useState(false);



  const fetchPlayer = () => {
    axios.get(`http://localhost:4000/players/${params.id}`).then((response) => {
      const { data } = response;
      console.log(data);
      setPlayer(data);
    });
  };

  const fetchComments = () => {
    axios.get("http://localhost:4000/comments").then((res) => {
      const { data } = res;
      console.log(data);
      setComments(data);
    });
  };

  useEffect(() => {
    const path = history.location.pathname;
    console.log(path);
    if (!currentUser && path !== "/signup" && path !== "/signin") {
      history.replace("/signin");
    }
    fetchPlayer();
    fetchComments();
  }, []);

  console.log("상세페이지");
  console.log(comments)
  console.log(player);
  const { playername, position, team, id: playerId, userId: postedUserId } =
    player || {};

  const onRemove = () => {
    axios.delete(`http://localhost:4000/players/${params.id}`);
    history.replace("/items");
  };


  const currentUserId = currentUser ? currentUser.id : null;

  const onRewriteComment = (comment) =>{
      setButtonActive(true)
      setRewriteSignal(true)
      setCurrentCommentId(comment.id)
      setText(comment.content)
  }

  const onNewComment = () =>{
    setButtonActive(true)
    setRewriteSignal(false)
    setText('')
}

  const onClickAddComment = (e) => {
      const commentInfo = {
          id: currentCommentId,
          user_id: currentUserId,
          item_id: player.id,
          content: Text
      };

      console.log(commentInfo)
      console.log(reWriteSignal)
      if(reWriteSignal){
        axios.put(`http://localhost:4000/comments/${currentCommentId}`, commentInfo).then((res) =>{
            fetchComments();
            history.push(`/items/${params.id}`)
      })}else{
            axios.post('http://localhost:4000/comments', {user_id: currentUserId, item_id: player.id, content:Text})
            .then(res=>{
                fetchComments();
                history.push(`/items/${params.id}`);
            })
      }
  }

  const onDeleteComment =(id) =>{
        axios.delete(`http://localhost:4000/comments/${id}`)
        .then(res=>{
            fetchComments();
            history.push(`/items/${params.id}`);
        })
  }

  return (
    <>
      <p>Now showing post {params.id} </p>

      <div>
        <b>{playername}</b> 포지션:{position} &nbsp;
        <span>소속 구단: {team} </span>
        {currentUser && currentUserId === postedUserId ? (
          <button onClick={() => history.push(`/items/${player.id}/edit`)}>
            수정하기
          </button>
        ) : null}
        {currentUser && currentUserId === postedUserId ? (
          <button onClick={onRemove}>삭제</button>
        ) : null}
        <button onClick={() => history.push("/items")}>홈으로</button>
      </div>
    <h2>Comments</h2>
        {comments.filter(comment => comment.item_id === playerId ).map(comment=> (
            <Comment.Group>
                <Comment key={comment.id}>
                    <Comment.Avatar
                    as="a"
                    src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                    />
            <Comment.Content>
                <Comment.Author as="a">익명</Comment.Author>
                <Comment.Text>{comment.content}</Comment.Text>
                <Comment.Actions>
                {comment.id === currentUserId ? 
                <Comment.Action active onClick={()=>
                    onRewriteComment(comment)
                }> 수정 </Comment.Action> : null
                }
                {comment.id === currentUserId ? 
                <Comment.Action active onClick={() => onDeleteComment(comment.id)}> 삭제 </Comment.Action> : null
                }
              </Comment.Actions>
            </Comment.Content>
          </Comment>
            </Comment.Group>

        ))}

      <Form onSubmit={onClickAddComment}>
        <Form.Input
            label="Comment"
            type="comment"
            id="newComment"
            placeholder="댓글을 입력해주세요"
            value={Text}
            onChange={event=>
                setText(event.target.value)
            }
            required
        />
        { buttonActive ?
        <Button 
            active
            type="submit"
            content='확인' 
            labelPosition='left' 
            icon='edit'
            onClick={() => setButtonActive(false)}
            primary />  :
        <Button
            disabled
            content='확인'
            /> 
        }
        <Button
            active
            type="primary"    
            content='새로운 댓글 쓰기'
            onClick = {() => onNewComment}
        /> 
    </Form>
    
    </>
  );
}

export default Detail;
