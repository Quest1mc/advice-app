import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event)=> {
    this.setState({term: event.target.value});
  };

  onFormSubmit= (event)=>{
      event.preventDefault();
      this.props.onFormSubmit(this.state.term);

  };

  render() {
    return (
      <div className="search-bar  ui segment">
        <form action="" onSubmit= {this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="field">Advice Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange } 
            //  ^^^^^^^^^^^ event handler
              placeholder="Search for specific advice here"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
