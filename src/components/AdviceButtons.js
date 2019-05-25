import React, { Component } from 'react';

class AdviceButtons extends Component {
    state = { term: [] };

   
    render() {
        return (
            <div>
                 <button onClick= {this.onRandomButtonClick} className="ui button">Random Advice</button>
                <button className="ui button">Lots of advice</button>
            </div>
        );
    }
}

export default AdviceButtons;