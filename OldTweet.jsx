import React, { Component } from 'react';
import './../node_modules/bulma/css/bulma.css';


class OldTweet extends Component {
    constructor(props)  {
    super(props);
    this.state = {
        oldtweets: []
        };
     };

// retrieve data from mockaroo API
componentDidMount() {
    fetch('https://my.api.mockaroo.com/users.json?key=8d7c43b0')
    .then(response => {
        return response.json();
    }).then(data => {
        //this.setState({oldtweets: data});
        console.log(data[1].id.substring(0, 12) + ' - API call success');
        console.log(this.props.selection);

        let oldtweet2 = `<div><font size = '1'>{this.state.oldtweets.user} : {this.state.oldtweets.timestamp}</font><br />
                <font size = '2'><b>{this.state.oldtweets.text}</b></font></div>`



        let oldtweet = {
                        user: data[1].user,
                        id: data[1].id,
                        text: data[1].text,
                        timestamp: data[1].timestamp
                        }

        // let oldtweets = data.map((tweet) => {
        //     return (
        //         <div text={tweet.text} id={tweet.id} timestamp={tweet.timestamp} user={tweet.user}>

        //         </div>
        //     )
        // })
        this.setState({
            oldtweets: oldtweet
        })

    })

}


    render() {
        
        return (
            <div>
                <font size = '1'>{this.state.oldtweets.user} : {this.state.oldtweets.timestamp}</font><br />
                <font size = '2'><b>{this.state.oldtweets.text}</b></font>
            </div>
        )
    }
}


export default OldTweet;