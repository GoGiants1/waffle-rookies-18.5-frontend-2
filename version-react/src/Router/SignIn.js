import React, {useEffect, useState} from 'react';
import {Button, Form, Popup, Radio, Segment} from 'semantic-ui-react';
import {useUserContext} from "../Context/UserContext";
import axios from "axios";

const SignIn = ({history}) => {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const [autoLogin, setAutoLogin] = useState(false)

  const {currentUser, setCurrentUser} = useUserContext()

  useEffect(() => {
    if (currentUser) {
      alert('잘못된 접근입니다.')
      history.replace('/items')
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
                    setCurrentUser(user)
                    history.push('/items')
                }
            });
          }).catch(e =>
            console.log(e)
            )
          }}>
          <Form.Input
            icon="userEmail"
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
            placeholder="Enter password"
            value={password}
            onChange={event =>
              setPassword(event.target.value)
            }
            required
          />

          <Form.Input>
            <Popup
              trigger={<Radio
                toggle
                label="Sign-in automatically"
                onChange={() => {
                  setAutoLogin(!autoLogin)
                }}
              />}
              content="자동 로그인 기능을 사용함으로, 사용자의 로그인 정보를 사용자의 컴퓨터에 저장합니다. 공공장소에서는 자동 로그인 기능을 사용하지 마십시오."
              position="top center"
            />
          </Form.Input>

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