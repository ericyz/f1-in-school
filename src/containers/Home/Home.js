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
    const searchInput = this.state._searchInputValue;

    if (searchInput.length > 0) {
      browserHistory.push({
        pathname: '/listings',
        search: `?keywords=${searchInput}`,
      });
    }
  }

  updateSearchInputValue(event) {
    this.setState({
      _searchInputValue: event.target.value
    });
  }

  render() {
    const styles = require('./Home.scss');
    const homeLogoImage = require('./f1is-black.svg');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>

        <div className="container">

          <div className={styles.formContainer}>
            <p>
              <img src={homeLogoImage}/>
            </p>

            <form onSubmit={this.onFormSubmit.bind(this)}>
              <input type="text" onChange={this.updateSearchInputValue.bind(this)} />
              <button type="submit" disabled={this.state._searchInputValue.length < 3}>GO</button>
            </form>     
          </div>         

        </div>
      </div>
    );
  }
}
