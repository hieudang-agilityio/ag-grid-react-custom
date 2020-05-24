import React, { Component } from 'react';
import Dropdown from './Dropdown';


export default class CountStatusBarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      total: 10,
    };

    setTimeout(() => {
      this.setState({
        count: this.props.api.getModel().rowsToDisplay.length,
        total: this.props.api.getModel().getRowCount()
      });
    });
  }

  render() {
    return (
      <div className="ag-status-name-value">
        <span className="component">Show:&nbsp;</span>
        <span><Dropdown />&nbsp;</span>
        <span>{this.state.count} of {this.state.total} Results</span>
      </div>
    );
  }
}