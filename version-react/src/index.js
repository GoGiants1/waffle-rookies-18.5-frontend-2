import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";
import { UserContextProvider } from './Context/UserContext';
import 'semantic-ui-css/semantic.min.css'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter>
       <App history={history} />
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
