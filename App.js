import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './img/avatar.png';
import TweetBox from './TweetBox';
import Tweet from './Tweet'
import './App.css';

// generate a random ID number
function  getID() {
  return 'ID_' + Math.random().toString(36).substr(2, 9);
  };

class App extends Component {

  constructor(props)  {
    super(props);
    this.state = {
      tweets: []
    }
  }


  handleTweet(tweetText)  {
    let tweetObj = {
      text: tweetText,
      liked: false,
      id: getID()
    }
    this.setState( {tweets: this.state.tweets.concat(tweetObj)} );
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map( (t) => {
      if (t.text === tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        }
      }
      return t;
    });
    
    this.setState({
      tweets
    })

  }

  handleDelete(tweet) {

    let delTweet = [];
    let i = this.state.tweets.indexOf(tweet);
      if(i !== -1) {
        delTweet = this.state.tweets.splice(i, 1);
      }

    this.setState({
      delTweet
    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CoderSchool Prework</h1>
        </header>

        <div>
          <p class="subtitle">
            Styled with <strong>Bulma</strong>!
          </p>
          <img src = {avatar} alt =''/>
          <TweetBox prompt="What's your status?" onTweet={this.handleTweet.bind(this)}/>
        </div>

        <div>
            { this.state.tweets.map( (tweet) => (
               <Tweet 
                  tweet = {tweet}
                  handleLike = {this.handleLike.bind(this)}
                  handleDelete = {this.handleDelete.bind(this)}
                />)
            )}
            
        </div>

      </div>
    );
  }
}

export default App;
