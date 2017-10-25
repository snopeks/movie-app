import React, { Component } from 'react';

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      query: ''
    }
  }
  handleSearchImput(e){
    this.setState({
      query: e.target.value
    })
  }
  submitQuery(evt){
     evt.preventDefault();
     console.log(this.state.query)
     console.log("submitted");
     //clear the form data afterwards
  }


  render(){
    return (
      <div>
        <form onSubmit={(evt) => this.submitQuery(evt)}>
          <input
          onChange={(evt) => this.handleSearchImput(evt)}
          value={this.state.query}
          type="text"
          placeholder="enter a movie title.."/>
          <button id="searchButton" type="submit">Search</button>
        </form>
      </div>
    );
  }
}


export default Search;