import React, { Component } from 'react';
import './../node_modules/bulma/css/bulma.css';


class OldTweet extends Component {
    constructor(props)  {
    super(props);
    this.state = {
        oldtweets: []
        };
     };


    // connect to mockaroo API and set JSON object to state
    componentDidMount() {
        fetch('https://my.api.mockaroo.com/users.json?key=8d7c43b0')
        .then(response => {
            return response.json();
        }).then(data => {
            //this.setState({oldtweets: data})
            console.log('run through get data from API')
            // Build 3 separate arrays for day, week, one month
            let day = [];
            let week = [];
            let month = [];

            for (let i = 0; i < data.length; i++) {
                if (this.getDaysOld(data[i].timestamp) <= 1) {
                    day.push(data[i]);
                }  else if (this.getDaysOld(data[i].timestamp) > 1 && this.getDaysOld(data[i].timestamp) <= 7) {
                    week.push(data[i]);
                }  else {
                    month.push(data[i]);
                }
            }

            // set state of oldtweets to filtered data set
            if (this.props.selection === 'day') {
                this.setState({oldtweets: day})
            }
            if (this.props.selection === 'week') {
                this.setState({oldtweets: week})
            }
            if (this.props.selection === 'month') {
                this.setState({oldtweets: month})
            }         

        })
    }


    // Calculate the number of days between time of tweet and current time
    getDaysOld(time) {
        let timeOfTweet = Date.parse(time)/86400000;   // time in days
        let currentTime = Date.now()/86400000;
        let daysOld = parseInt(currentTime - timeOfTweet);
        return daysOld;
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