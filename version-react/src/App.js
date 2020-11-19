import React, { useEffect } from 'react';
import { Route,Redirect,Switch,Link } from 'react-router-dom';
import Home from './Router/Home';
import Create from './Router/Create';
import SignIn from './Router/SignIn';
import SignUp from './Router/SignUp';
import Detail from './Router/Detail';
import Edit from './Router/Edit';
import {useUserContext} from './Context/UserContext'



function App({history}) {
  const{currentUser,setCurrentUser} = useUserContext();
  
  const handleLogout = () => {
    setCurrentUser(undefined)
  }
  useEffect(()=>{
    const path = history.location.pathname
    if(!currentUser && path !=="/signup" && path !=="/signin"){
      history.push('/signin')
    }
  },[])

  return (
    <div className='App'>
    
      <Switch>
        <Route path="/"render={() => <Redirect to="/items"/>} exact/>
        <Route path="/signin" component={SignIn} exact/>
        <Route path="/signup" component={SignUp} exact/>
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
