import React, { useEffect } from 'react';
import { Route,Redirect,Switch,Link,useHistory } from 'react-router-dom';
import Home from './Router/Home';
import Create from './Router/Create';
import SignIn from './Router/SignIn';
import SignUp from './Router/SignUp';
import Detail from './Router/Detail';
import Edit from './Router/Edit';
import {useUserContext} from './Context/UserContext'
import axios from 'axios';



function App() {
  const history = useHistory();
  const{currentUser,setCurrentUser} = useUserContext();
  
  const handleLogout = () => {
    console.log('handleLogout')
    console.log(currentUser)
    axios.put(`http://localhost:4000/users/${currentUser.id}`, {...currentUser, logged_in: false})
    setCurrentUser(undefined)
    history.push('/signin')
  }
  useEffect(()=>{
    console.log(currentUser)
    const path = history.location.pathname
    console.log(path)
    if(!currentUser && path !=="/signup" && path !=="/signin"){
      history.replace('/signin')
    }
  },[])
  const urlNow = history.location.pathname
  return (
    <div className='App'>
    
      <Switch>
        <Route path="/"render={() => <Redirect to="/items"/>} exact/>
        <Route path="/signup" component={SignUp} exact/>
        <Route path="/signin" component={SignIn} exact/>
       
        <Route path="/items" component={Home} exact/>
        <Route path="/items/create" component={Create}/>
        <Route path="/items/:id/edit"  component={Edit}/>
        <Route path="/items/:id" component={Detail}/>  
      </Switch>
      
      <Link to ='/signin' onClick={handleLogout}>로그아웃</Link>
      
    </div>
  );
  
}

export default App;
