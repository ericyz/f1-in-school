import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { browserHistory } from 'react-router';
import './Home.scss';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      _searchInputValue: ''
    };
  }

  onFormSubmit(event) {
    event.preventDefault();
    // const searchInput = this.state._searchInputValue;

    // if (searchInput.length > 0) {
      browserHistory.push({
        pathname: '/leaderboard'
      });
      // ,
      // search: `?keywords=${searchInput}`
    // }
  }

  updateSearchInputValue(event) {
    this.setState({
      _searchInputValue: event.target.value
    });
  }

  render() {
    const styles = require('./Home.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>

        <div className={styles.container}>

          <div className={styles.formContainer}>

            <h3>ARE YOU READY TO RACE?</h3>
            <form onSubmit={this.onFormSubmit.bind(this)}>
              {/* <input type="text" placeholder="Enter team name" onChange={this.updateSearchInputValue.bind(this)} /> */}
              <div>
                <button type="submit">VIEW LEADERBOARD</button>
              </div>
            </form>     
          </div>         

        </div>
      </div>
    );
  }
}
