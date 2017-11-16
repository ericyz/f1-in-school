<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
=======
import React, { Component, PropTypes } from 'react';
import Menu from './../Menu/Menu';
>>>>>>> origin/develop
import { IndexLink } from 'react-router';
import Flexbox from 'flexbox-react';
import 'semantic-ui-css/semantic.min.css';
import './App.scss';
// import { slide as Menu } from 'react-burger-menu';
// import { connect } from 'react-redux';
// import { IndexLink } from 'react-router';
// import { LinkContainer } from 'react-router-bootstrap';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import Nav from 'react-bootstrap/lib/Nav';
// import NavItem from 'react-bootstrap/lib/NavItem';
// import Helmet from 'react-helmet';
// import { InfoBar } from 'components';
// import { push } from 'react-router-redux';
// import config from '../../config';
// import { asyncConnect } from 'redux-async-connect';

// @asyncConnect([{
// promise: ({store: {dispatch, getState}}) => {
// promises.push(dispatch(loadInfo()));

// return Promise.all(promises);
// }
// }])
// @connect(
//   state => ({user: state.auth.user}),
//   {logout, pushState: push})
const menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

const menuItemStyle = {
  display: 'block',
  outline: 'none',
  marginLeft: '10px',
  fontWeight: '700',
  fontFamily: '"Raleway", Arial, sans-serif',
  color: '#b8b7ad',
  fontSize: '1.15em'
};

const contentStyle = {
  height: '100%'
};

export default class App extends Component {
  // static propTypes = {
  //   children: PropTypes.object.isRequired,
  //   user: PropTypes.object,
  //   logout: PropTypes.func.isRequired,
  //   pushState: PropTypes.func.isRequired
  // };

  // static contextTypes = {
  //   store: PropTypes.object.isRequired
  // };

  constructor() {
    super();
    this.state = { menuOpen: false };
  }

  // static contextTypes = {
  // store: PropTypes.object.isRequired
  // };


  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.content}>
        <div className={styles.app}>
          <Helmet {...config.app.head}/>

          <div className={styles.appContent}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
