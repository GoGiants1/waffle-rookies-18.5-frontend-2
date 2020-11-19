import React, {useEffect, useState} from 'react';
import {Form} from 'semantic-ui-react';
import {useUserContext} from "../Context/UserContext";
import axios from 'axios'
import {useHitory} from 'react-router-dom'

const SignUp = ({match}) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {currentUser} = useUserContext()

  useEffect(() => {
    if (match.path === '/signup') {
      if (currentUser) {
        alert('잘못된 접근입니다.')
        history.push('/items')
      }
    } 
    // else {
    //   setUsername(currentUser.username);
    //   setFirstname(currentUser.first_name);
    //   setLastname(currentUser.last_name);
    // }
  }, [])

  // const roleOptions = [
  //   {key: 'i', text: 'instructor', value: 'instructor'},
  //   {key: 'p', text: 'participant', value: 'participant'},
  // ]


  const onClickSignUpButton = e => {
    if (match.path === '/signup') {
      const userInfo = {
        email: email,
        username: username,
        password: password,
        logged_in: false
      };
      axios.post('http://localhost:4000/users' ,userInfo).then((res) => {
        history.push('/signin')
      })
    }
  }

  return (
    <div className="signup_page">
      <Form onSubmit={onClickSignUpButton}>
        {match.path === '/signup' ?
          <Form.Group widths='equal'>
            <Form.Input fluid label='Email' placeholder='Email' value={email} type='email'
                        onChange={(event) => setEmail(event.target.value)}/>
          </Form.Group> : null}
        <Form.Group widths='equal'>
          <Form.Input fluid label='Username' placeholder='Username' value={username}
                      onChange={(event) => setUsername(event.target.value)}/>
          {match.path === '/signup' ?
            <Form.Input fluid label='Password' placeholder='Password' value={password} type='password'
                        onChange={(event) => setPassword(event.target.value)}/>
            : null}
        </Form.Group>
        
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default SignUp;