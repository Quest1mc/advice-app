import React, { Component } from 'react';

class AdviceButtons extends Component {
    state = { term: [] };
    // onClick = (event)=> {
    //     this.setState({term: event.target.value});
    //   };

   
    render() {
        return (
            <div>
                 <button onClick= {this.onRandomButtonClick} className="ui button random">Random Advice</button>
                <button onClick = {this.onRandomButtonClick} className="ui button">Lots of advice</button>
            </div>
        );
    }
}

export default AdviceButtons;