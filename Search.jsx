import React, { Component } from 'react';
import './../node_modules/bulma/css/bulma.css';


class Search extends Component {
    constructor(props)  {
    super(props);
    this.state = {
        choice: 'dummy text'
        };
     };


    render() {
        
        return (
            <div>
                <div className='dropdown is-hoverable'>
                    <div className="dropdown-trigger">
                    <button className='button is-primary is-small is-rounded' aria-haspopup="true" aria-controls="dropdown-menu">
                      <span>old tweets</span>
                      <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className='dropdown-item' onClick = {() => this.props.onOldTweet('day')}>
                        Past 24 hours
                      </a>
                      <a className="dropdown-item" onClick = {() => this.props.onOldTweet('week')}>
                        Past week
                      </a>
                      <a href="#" className="dropdown-item" onClick = {() => this.props.onOldTweet('month')}>
                        Past month
                      </a>
                    </div>
                    </div>
                    </div>
            </div>
        )
    }
}


export default Search;