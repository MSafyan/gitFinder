import React, { Component } from "react";

export class reposItem extends Component {
  render() {
    return (
      <div>
        <a href={this.props.repo.html_url}>{this.props.repo.name}</a>
      </div>
    );
  }
}

export default reposItem;
