import React, { Component } from 'react';
import api from '../services/api';
import twitterLogo from '../twitter.svg';
import './Timeline.css';


export default class Timeline extends Component {
  state = {
    newTweet: ' ',
  }

handleNewTweet = async e => {
  if(e.keyCode !== 13) return;

  const content = this.state.newTweet;
  const author = localStorage.getItem("@GoTwitter:username");

  await api.post('tweets', { content, author})
  console.log(content, author);
  this.setState({ newTweet: ''});
}; 

  handleInputChange = e =>{
    this.setState({ newTweet: e.target.value});
  }

  render() {
    return  (
      
    <div className="timeline-wrapper">
      <img height={24} src={twitterLogo} alt="GoTwitter"/>
      <form>
        <textarea
          valeu={this.state.newTweet}
          onChange={this.handleInputChange}
          onKeyDown={this.handleNewTweet}
          placeholder="O que está acontecendo?"
          ></textarea>
      </form>
    </div>
    );
  }
}
