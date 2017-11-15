import React, { Component } from 'react';
import ReactTable from 'react-table';
import Helmet from 'react-helmet';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.getValidationState = this.getValidationState.bind(this)
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const styles = require('./Listings.scss');

    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]
  
    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className={styles.number}>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]
  
    return (
      <div>
      <Helmet title="Listings">
        <link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css" />    
      </Helmet>
      <div>

      <h2>Search</h2>
      <form>
      <input type="text" placeholder="Filter by Team Name"/>
    </form>

    <h2>Results</h2>
    
      <ReactTable
        data={data}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value}
        columns={[
          {
              
                Header: "Country",
                accessor: "firstName",
                filterMethod: (filter, row) =>
                  row[filter.id].startsWith(filter.value) &&
                  row[filter.id].endsWith(filter.value),
                show: false
              },
              {
                Header: "State",
                id: "lastName",
                accessor: d => d.lastName,
                Cell: ({ value }) => (value >= 21 ? "Yes" : "No"),
                filterMethod: (filter, row) => {
                  if (filter.value === "all") {
                    return true;
                  }
                  if (filter.value === "true") {
                    return row[filter.id] >= 21;
                  }
                  return row[filter.id] < 21;
                },
                filterAll: true,
                Filter: ({ filter, onChange }) =>
                <select
                  onChange={event => onChange(event.target.value)}
                  style={{ width: "100%" }}
                  value={filter ? filter.value : "all"}
                >
                  <option value="any">Any</option>
                  <option value="VIC">VIC</option>
                  <option value="ACT">ACT</option>
                  <option value="NSW">NSW</option>
                  <option value="WA">WA</option>
                  <option value="NT">NT</option>
                  <option value="SA">SA</option>
                  
                </select>
              },

              {
                Header: "City",
                accessor: "age",
                Filter: ({ filter, onChange }) => <input type="text" placeholder="Filter by City"/>                
              },
              {
                Header: "Venue",
                accessor: "venue",
                Filter: ({ filter, onChange }) => <input type="text" placeholder="Filter by Team Name"/>                
                
              },
              {
                Header: "Date",
                accessor: "date",
                Filter: ({ filter, onChange }) => <input id="date" type="date" />
              },
              {
                Header: "Team",
                accessor: "team",
                Filter: ({ filter, onChange }) => <input type="text" placeholder="Filter by Team Name"/>                
                
              }
 
        ]}
        defaultPageSize={10}
        className="-striped -highlight"
        getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
                //goto()
        
                // IMPORTANT! React-Table uses onClick internally to trigger
                // events like expanding SubComponents and pivots.
                // By default a custom 'onClick' handler will override this functionality.
                // If you want to fire the original onClick handler, call the
                // 'handleOriginal' function.
                if (handleOriginal) {
                  handleOriginal()
                }
              }
            }
          }
        }
      />
      <br />
    </div>
      </div>

    );
  }
}


function goto() {
  location.assign("/Widget");  
}
