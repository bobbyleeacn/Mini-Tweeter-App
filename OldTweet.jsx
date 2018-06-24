import React, { Component } from 'react';
import './../node_modules/bulma/css/bulma.css';


class OldTweet extends Component {
    constructor(props)  {
    super(props);
    this.state = {
        oldtweets: []
        };
     };


componentDidMount() {
    fetch('https://my.api.mockaroo.com/users.json?key=8d7c43b0')
    .then(response => {
        return response.json();
    }).then(data => {this.setState({oldtweets: data})})
}


    render() {
        return (
            <div>
                {this.state.oldtweets.map( item  => 
                    <div key= {item.id}>
                        <font size = '1'>{item.user} : {item.timestamp}</font><br />
                        <font size = '2'><b><i>{item.text}</i></b></font>
                    </div>
                    )
                }

            </div>
        )
    }
}


export default OldTweet;