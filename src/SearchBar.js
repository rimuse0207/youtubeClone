import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleClick = () => {
    this.props.onSearchTerm(this.state.search);
  };

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter Search"
          name={this.state.search}
          value={this.state.search}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}
