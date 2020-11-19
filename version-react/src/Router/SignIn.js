import React, {useEffect, useState} from 'react';
import {Button, Form, Popup, Radio, Segment} from 'semantic-ui-react';
import {useUserContext} from "../Context/UserContext";
import axios from "axios";
import {useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')


  const {currentUser, setCurrentUser} = useUserContext()

  useEffect(() => {
    if(currentUser) {
      alert('잘못된 접근입니다.')
      history.replace('/items')
    }else{
    axios.get('http://localhost:4000/users').then(res =>{
      res.data.map(user=> {
        if(user.logged_in){
          setCurrentUser(user)
          history.push('/items')
        }

      })
    })
  }
  }, [])

  return (
    <div className="login_page">
      <Segment placeholder>
        <h1>
            로그인 페이지 입니다.
        </h1>
        <Form className="login_form" onSubmit={() => {
          axios.get('http://localhost:4000/users').then((res) => {
            res.data.map(user=>{
                if(user.email === userEmail && user.password === password){                    
                    axios.put(`http://localhost:4000/users/${user.id}`, {...user, logged_in:true })
                    setCurrentUser({...user, logged_in : true})
                    console.log(currentUser)
                    history.push('/items')
                }
            });
            
          }).catch(e =>
            console.log(e)
            )
          }}>
          <Form.Input
            icon="mail"
            iconPosition="left"
            label="UserEmail"
            id="userEmail-input"
            placeholder="Enter Email"
            value={userEmail}
            onChange={event =>
              setUserEmail(event.target.value)
            }
            required
          />
          <Form.Input
            icon="lock"
            iconPosition="left"
            label="Password"
            type="password"
            id="pw-input"
            placeholder="Enter Password"
            value={password}
            onChange={event =>
              setPassword(event.target.value)
            }
            required
          />

          <Button
            id="login-button"
            type="submit"
            content="Login"
            primary
          />
        </Form>
        <Button
          content="Sign up"
          icon="signup"
          id="signup-button"
          onClick={() => {
            history.push('/signup')
          }}
        />
      </Segment>
    </div>);
}

export default SignIn;