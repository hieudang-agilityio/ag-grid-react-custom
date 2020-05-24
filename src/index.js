import React, { Component } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import LanguageStatusBarComponent from './LanguageStatusBarComponent';
import CountStatusBarComponent from './CountStatusBarComponent';
import PaginationComponent from './Pagination';

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [{ field: 'row' }, { field: 'name' }],
      defaultColDef: {
        editable: true,
        sortable: true,
        flex: 1,
        minWidth: 100,
        filter: true,
        resizable: true,
      },
      rowData: createRowData(),
      rowSelection: 'multiple',
      frameworkComponents: {
        languageStatusBarComponent: LanguageStatusBarComponent,
        countStatusBarComponent: CountStatusBarComponent,
        paginationComponent: PaginationComponent
      },
      statusBar: {
        statusPanels: [
          { 
            statusPanel: 'countStatusBarComponent', 
            align: 'left' 
          },
          { 
            statusPanel: 'languageStatusBarComponent',
            align: 'center'
          },
          {
            statusPanel: 'paginationComponent',
            align: 'right'
          },
          {
            statusPanel: 'agAggregationComponent',
            statusPanelParams: {
              aggFuncs: ['count', 'sum'],
            },
          },
        ],
      },
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  };

  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
            enableRangeSelection={true}
            rowSelection={this.state.rowSelection}
            frameworkComponents={this.state.frameworkComponents}
            statusBar={this.state.statusBar}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}

function createRowData() {
  return [
    {
      row: 'Row 1',
      name: 'Michael Phelps',
    },
    {
      row: 'Row 2',
      name: 'Natalie Coughlin',
    },
    {
      row: 'Row 3',
      name: 'Aleksey Nemov',
    },
    {
      row: 'Row 4',
      name: 'Alicia Coutts',
    },
    {
      row: 'Row 5',
      name: 'Missy Franklin',
    },
    {
      row: 'Row 6',
      name: 'Ryan Lochte',
    },
    {
      row: 'Row 7',
      name: 'Allison Schmitt',
    },
    {
      row: 'Row 8',
      name: 'Natalie Coughlin',
    },
    {
      row: 'Row 9',
      name: 'Ian Thorpe',
    },
    {
      row: 'Row 10',
      name: 'Bob Mill',
    },
    {
      row: 'Row 11',
      name: 'Willy Walsh',
    },
    {
      row: 'Row 12',
      name: 'Sarah McCoy',
    },
    {
      row: 'Row 13',
      name: 'Jane Jack',
    },
    {
      row: 'Row 14',
      name: 'Tina Wills',
    },
  ];
}

render(<GridExample></GridExample>, document.querySelector('#root'));