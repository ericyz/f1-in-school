
import Flexbox from 'flexbox-react';
import React from 'react';

const headerSectionStyle = {
    width: "100%",
    height: "100px",
    justifyContent: "center"
};
const headerStyle = {
    width: "40em",
    fontSize: "30px",
    fontFamily: '"Raleway", Arial, sans-serif',
    fontWeight: '700',
    alignSelf: "center",
};

const Header = (props) => (
    <Flexbox element="header" style={headerSectionStyle}>
    <div style={headerStyle}>{props.text}</div>
</Flexbox>);

export default Header;