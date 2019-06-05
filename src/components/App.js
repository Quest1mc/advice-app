import React, { Component } from "react";
import SearchBar from "./SearchBar";
import AdviceButtons from "./AdviceButtons";
import adviceSlip from "../apis/adviceSlip";
import AdviceList from "./AdviceList";

class App extends Component {
    state = {advice : [], message: "" ,randomadvice:{}, lotsOfAdvice :[] };
    

    
  onTermSubmit = async term => {
    try{
      const response = await adviceSlip.get("/search/" + term);
      // response.data.slips
      console.log(response);
      this.setState({ advice : response.data.slips , message: response.data.message});
    }catch (error){
      console.error(error);
    }
   

  };

  onRandomButtonClick = async () => {
    const response = await adviceSlip.get();
    console.log(response);
    this.setState({ randomadvice : response.data.slip});
  };

   onLotsAdviceButtonClick=  async () => {
     for (var i=0;i<10;i++){
      const response = await adviceSlip.get();
      console.log(response);
     
      this.setState({ lotsOfAdvice :[], response });
      console.log(this.state.lotsOfAdvice);
     }
  };

  // the api call works but.. it does not push to array lotsOfAdvice
  // and thus cannot yet be rendered via AdviceList

 

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
       
        <AdviceButtons onRandomButtonClick={this.onRandomButtonClick}  onLotsAdviceButtonClick= {this.onLotsAdviceButtonClick}/>

        <AdviceList randomadvice = {this.state.randomadvice} advice= {this.state.advice} message = {this.state.message} lotsOfAdvice = {this.state.lotsOfAdvice}/>
      </div>
    );
  }
}

export default App;
