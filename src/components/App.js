import React, { Component } from "react";
import SearchBar from "./SearchBar";
import AdviceButtons from "./AdviceButtons";
import adviceSlip from "../apis/adviceSlip";
import AdviceList from "./AdviceList";

class App extends Component {
    state = {advice : [] };
  onTermSubmit = async term => {
    try{
      const response = await adviceSlip.get("/search/" + term);
      // response.data.slips
      console.log(response);
      this.setState({ advice : response.data.slips});
    }catch (error){
      console.error(error);
    }
   

  };

 

  onRandomButtonClick = async () => {
    const response = await adviceSlip.get();
    console.log(response);
  };

   onLotsAdviceButtonClick=  async () => {
    const response = await adviceSlip.get();
    console.log(response);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
       
        <AdviceButtons onRandomButtonClick={this.onRandomButtonClick} />

        <AdviceList advice= {this.state.advice}/>
      </div>
    );
  }
}

export default App;
