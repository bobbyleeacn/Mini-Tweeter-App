import React, { Component } from 'react';

class TweetBox extends Component {
  constructor(props)  {
  	super(props);
  	this.state = {
  		text: "",
  		charsRemaining: 140,
      id: 'initialized_ID'
  	};
  };


  handleChange(text)  {
  	this.setState({
  		text: text,
  		charsRemaining: 140 - text.length
  	});
  }


  // User presses 'enter' key instead of button click
	handleSubmit(e) {
		if ( e.keyCode === 13 && this.state.charsRemaining >= 0) {
			this.props.onTweet(this.state.text);
			e.target.value = '';	// clear the textbox
		}
  }



  render() {
    return (
	    <div>
			<input type = 'text'
				placeholder = {this.props.prompt} 
				onChange = {(e) => this.handleChange(e.target.value)}
				onKeyUp = {(e) => this.handleSubmit(e)}
			/>
			<p> {this.state.charsRemaining} </p>
			<button className='button is-primary' onClick = { () => this.props.onTweet(this.state.text) }
					disabled = {this.state.charsRemaining < 0}
			 > Tweet </button>

		</div>
    );
  }
}

export default TweetBox;