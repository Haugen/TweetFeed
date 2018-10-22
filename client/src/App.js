import React, { Component } from 'react';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4000');

class App extends Component {
  state = {
    tweets: []
  }

  componentDidMount() {
    socket.on('tweet', data => {
      this.updateStatehandler(data);
      console.log(data.text);
      console.log(data.user.name);
    })
  }

  updateStatehandler(data) {
    let tweets = [...this.state.tweets];
    const tweet = {
      user: data.user.name,
      text: data.text
    }
    tweets.push(tweet);
    this.setState({
      tweets: tweets
    });
  }

  render() {
    let tweets = this.state.tweets;
    let renderTweets = [];

    for (let i = 0; i < tweets.length; i++) {
      renderTweets.unshift(
        <div>
          <strong>{tweets[i].user}</strong>
          <p>{tweets[i].text}</p>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Tweets</h1>
        {renderTweets}
      </div>
    );
  }
}

export default App;
