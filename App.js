import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './img/avatar.png';
import TweetBox from './TweetBox';
import Tweet from './Tweet'
import OldTweet from './OldTweet'
import Search from './Search'
import './App.css';
import './../node_modules/bulma/css/bulma.css';

// generate a random ID number
function  getID() {
  return 'id_' + Math.random().toString(36).substr(2, 9);
  };



class App extends Component {

  constructor(props)  {
    super(props);
    this.state = {
      tweets: [],
      oldtweets: []
    }
  }


  handleTweet(tweetText)  {
    let tweetObj = {
      text: tweetText,
      liked: false,
      id: getID(),
      timeStamp: parseInt((Math.floor(Date.now() / 1000)) / 60)
    }
    this.setState( {tweets: this.state.tweets.concat(tweetObj)} );
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map( (t) => {
      if (t.text === tweet.text) {
        return {
          text: t.text,
          liked: !t.liked,
          id: t.id,
          timeStamp: t.timeStamp
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


  handleOldTweets(oldtweet) {

    this.setState({
      tweets: [],
      selection: oldtweet,
      oldtweets: [
        { test: 'blow', shane: 'hard'}
                  ]

    })
    console.log(oldtweet)


  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mini Tweeter App</h1>
        </header>
        <div>
          <Search onOldTweet={this.handleOldTweets.bind(this)} />

          <img src = {avatar} alt =''/>
          <TweetBox prompt="What's your status?" onTweet={this.handleTweet.bind(this)}/>
        </div>
        <div>
            { this.state.tweets.map( (tweet) => (
               <Tweet 
                  key = {tweet.id}
                  tweet = {tweet}
                  handleLike = {this.handleLike.bind(this)}
                  handleDelete = {this.handleDelete.bind(this)}
                />)
            )}
        </div>
                    { this.state.oldtweets.map( (tweet) => (<OldTweet selection={this.state.selection}/>) )}
      </div>
    );
  }
}

export default App;
