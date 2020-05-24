import React, { Component } from 'react';
import Language from './Language';

export default class LanguageStatusBarComponent extends Component {

  render() {
    return (
      <div className="ag-status-name-value">
        <span>
          <Language />
        </span>
      </div>
    );
  }
}
