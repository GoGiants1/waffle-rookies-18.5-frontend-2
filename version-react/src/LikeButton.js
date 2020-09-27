import React, {Component, useState} from 'react';

class LikeButton extends Component {
    state = {
        likes: 0
      };
    render() {
        
          return <button>Likes: {this.state.likes} </button>
      }
};

export default LikeButton;