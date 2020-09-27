import React, { Component } from 'react';

import './App.css';

class ListGenerator extends Component{
  render(){
    return (
      <header>
            <h2>
                <button>야구 선수 추가하기</button>
            </h2>
            좋아하는 야구 선수 추가하기
        </header>

    );
  }
}


class App extends Component {
  render() {
    return (
    <div className="App">
      <ListGenerator></ListGenerator>
    </div>
    );
  }
}

export default App;
