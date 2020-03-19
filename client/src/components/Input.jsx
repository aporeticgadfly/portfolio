import React from "react";

class Input extends React.Component {

  render() {
    return (<input onChange={this.props.handleChange} type="search" placeholder="Search for a project..." className="searchbar"></input>);
  }
}

export default Input;
