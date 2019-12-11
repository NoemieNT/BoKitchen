import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <form
        className="searchBar"
        onChange={evt => this.props.clbk(evt.target.value)}
      >
        <label className="label" htmlFor="searchBar">
          Search
        </label>
        <input className="input" id="search" name="searchBar" type="text" />
      </form>
    );
  }
}

export default SearchBar;
