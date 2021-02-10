import React from 'react'
import * as Constants from '../constants';

export default class AjaxButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lastResponse: "Have not sent anything yet."};
    
        this.onButtonClick = this.onButtonClick.bind(this);
      }

    onButtonClick() {
        fetch(Constants.API_URL, {method: 'post'})
            .then(res => res.text())
            .then(
                (result) => {
                    this.setState({lastResponse: result});
                },
                (error) => {
                    this.setState({lastResponse: `Ended with exception - ${error}`});
                }
            )
    }

    render() {
        return (
            <>
                <h3>Last response was: {this.state.lastResponse}</h3>
                <button onClick={this.onButtonClick}>Send request</button>
            </>
        )
    }
}
