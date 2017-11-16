import React, { Component, PropTypes } from 'react';
import Menu from './../Menu/Menu';
import { IndexLink } from 'react-router';
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


  static propTypes = {
    children: PropTypes.object.isRequired,
    // user: PropTypes.object,
    // logout: PropTypes.func.isRequired,
    // pushState: PropTypes.func.isRequired
  };

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
      <div className={styles.app} >
        <div id="outer-container" >
          <Menu styles={menuStyles} isOpen={this.menuOpen}>
            <IndexLink to="/" className="menu-item" style={menuItemStyle} activeStyle={{ color: '#33e0ff' }} >
              <div className="menu-item" />
              <span >Home</span>
              </IndexLink>
            <IndexLink to="/leaderboard" className="menu-item" style={menuItemStyle} activeStyle={{ color: '#33e0ff' }}>
              <div className="menu-item" />
              <span >Leader Board</span>
            </IndexLink>
            <IndexLink to="/about" className="menu-item" style={menuItemStyle} activeStyle={{ color: '#33e0ff' }}>
              <div className="menu-item" />
              <span >About</span>
            </IndexLink>
          </Menu>
        </div>
        <div style={contentStyle}>
          {this.props.children}
        </div>
        <div className="well text-center">
          Have questions? Ask for help <a
            href="https://github.com/erikras/react-redux-universal-hot-example/issues"
            target="_blank">on Github</a> or in the <a
              href="https://discord.gg/0ZcbPKXt5bZZb1Ko" target="_blank">#react-redux-universal</a> Discord channel.
        </div>
      </div>
    );
  }
}
