import React, { Component } from 'react';


class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div>
                <br />
                <b><font size='4'>{tweet.text}</font></b>
                <p><font size='2'><i>{this.props.tweet.id}</i></font></p>
                <br />
                <a href='#' className='button is-primary is-small is-rounded' onClick={() => this.props.handleLike(tweet)}>
                    {tweet.liked ? 'Unlike' : 'Like'}
                </a>
                &emsp; <button className='button is-small is-rounded is-info' onClick={() => this.props.handleDelete(tweet)}>Delete </button>
            </div>
        )
    }
}
export default Tweet;