import React, { Component } from 'react';

class AdviceButtons extends Component {
    state = {};
    // onClick = (event)=> {
    //     this.setState({term: event.target.value});
    //   };

   
    render() {
        return (
            <div>
                 <button onClick= {this.props.onRandomButtonClick} className="ui button random">Random Advice</button>
                <button  onClick = {this.props.onLotsAdviceButtonClick} className="ui button">Lots of advice</button>
            </div>
        );
    }
}
  //this line is to test commit and merge across board 
export default AdviceButtons;