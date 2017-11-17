import React, { Component } from 'react';
import ReactTable from 'react-table';
import Helmet from 'react-helmet';
import matchSorter from 'match-sorter'
import { getRacesProxy } from '../../api/racesApi';

export default class Listings extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      data:[]
    }
    this.getValidationState = this.getValidationState.bind(this)
  }

  componentDidMount() {
    let self = this;
    getRacesProxy().then(data=>{
        console.log('GOT DATA', data)
        self.setState(prevState => Object.assign(prevState, {data: data}))
      });
  }

  handleRefreshClick() {
    console.log('REFRESHING')
    getRacesProxy().then(data=>{
      console.log(data)
      self.setState(prevState => Object.assign(prevState, {data: data}))
    });
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

    return (
      <div className={` ${styles.listings}`}>
      <Helmet title="Listings">
        <link rel="stylesheet" href="https://unpkg.com/react-table@latest/react-table.css" />    
      </Helmet>
      <div>


<div className={`${styles.resultsContainer} container`} >
    <h2 className={styles.header}>Races</h2>
    <button className={styles.refreshButton} onClick={this.handleRefreshClick.bind(this)}>Refresh</button>
      <ReactTable
        data={this.state.data}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value}
        columns={[
          // {     
          //       Header: "Country",
          //       accessor: 'country',
          //       show: false
          //     },
          //     {
          //       Header: 'State',
          //       accessor: 'state',
          //       Filter: ({ filter, onChange }) => <div></div>
          //     },

              {
                Header: 'City',
                accessor: 'city',
                filterMethod: (filter, rows) => {
                  return matchSorter(rows, filter.value, { keys: ["city"] })
                },
                filterAll: true,                
                Filter: ({ filter, onChange }) => <input type="text" placeholder="Filter by City" value={filter ? filter.value : ''} onChange={event => onChange(event.target.value)} />                
              },
              {
                Header: 'Venue',
                accessor: "venue",
                Filter: ({ filter, onChange }) => <input type="text" placeholder="Filter by Venue" value={filter ? filter.value : ''} onChange={event => onChange(event.target.value)}/>,             
                filterMethod: (filter, rows) => {
                  return matchSorter(rows, filter.value, { keys: ["venue"] })
                },
                filterAll: true       
              },
              {
                Header: 'Date',
                accessor: "date",
                Filter: ({ filter, onChange }) => <input id="date" type="date" />,    
             },
              {
                Header: 'Team 1',
                accessor: d => typeof d.team1Result === 'null' ? '' : d.team1Result.team,
                id: 'team1',
                Filter: ({ filter, onChange }) => <input type="text" placeholder="Filter by Team Name" value={filter ? filter.value : ''} onChange={event => onChange(event.target.value)}/>,
                filterMethod: (filter, rows) => {
                  var bool = matchSorter(rows, filter.value, { keys: ["team1"] })
                  return bool
                },
                filterAll: true,
                sortMethod: (a, b) => {
                  return parseFloat(a) > parseFloat(b) ? 1 : -1;
                }                                    
              },
              {
                Header: 'T1 Time',
                accessor: d => d.team1Result.raceTime,
                id: 'team1RaceTime',
                Filter: ({ filter, onChange }) => <div></div>,
                filterMethod: (filter, rows) => {
                  var bool = matchSorter(rows, filter.value, { keys: ["team1RaceTime"] })
                  return bool
                },
                filterAll: true                                     
              },
              {
                Header: 'Team 2',
                accessor: d => typeof d.team2Result === 'null' ? '' : d.team2Result.team,
                id: 'team2',                
                Filter: ({ filter, onChange }) => <input type="text" placeholder="Filter by Team Name" value={filter ? filter.value : ''} onChange={event => onChange(event.target.value)}/>,
                filterMethod: (filter, rows) => {
                  return matchSorter(rows, filter.value, { keys: ["team2"] })
                },
                filterAll: true              
              },
              {
                Header: 'T2 Time',
                accessor: d => d.team2Result.raceTime,
                id: 'team2RaceTime',
                Filter: ({ filter, onChange }) => <div></div>,
                filterMethod: (filter, rows) => {
                  var bool = matchSorter(rows, filter.value, { keys: ["team2RaceTime"] })
                  return bool
                },
                filterAll: true                                     
              }
 
        ]}
        defaultSorted={[
          {
            id: "date",
            desc: true
          }
        ]}
        defaultPageSize={10}
        className={`-striped -highlight ${styles['bg-wht']}`}
        getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)

                goto(rowInfo.original.raceId)
        
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
      </div>
      
    );
  }
}


function goto(id) {
  location.assign(`/event/${id}`);  
}
