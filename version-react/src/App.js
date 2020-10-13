import React from 'react';
import { Route,Redirect,Switch } from 'react-router-dom';
import Home from './Router/Home';
import Create from './Router/Create';

import Detail from './Router/Detail';
import Edit from './Router/Edit';



function App() {
    
    

  return (
    <><Switch>
        <Route path="/"render={() => <Redirect to="/items"/>} exact/>
        <Route path="/items" component={Home} exact/>
        <Route path="/items/create" component={Create}/>
        <Route path="/items/:id/edit"  component={Edit}/>
        <Route path="/items/:id" component={Detail}/>
      </Switch>
    </>
  );
  
}

export default App;
