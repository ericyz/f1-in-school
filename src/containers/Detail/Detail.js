import Flexbox from 'flexbox-react';
import React from 'react';
import TopList from './TopList';
import ResultList from './ResultList';

const headerSectionStyle = {
    width: "100%",
    height: "100px",
    justifyContent: "center"
};

const contentSectionStyle = {
    width: "100%",
    // height: "50px"
    justifyContent: "center"
};

const headerStyle = {
    width: "40em",
    fontSize: "30px",
    fontFamily: '"Raleway", Arial, sans-serif',
    fontWeight: '700',
    alignSelf: "center",
};

const contentStyle = {
    width: "40em",
    fontSize: "30px",
    fontFamily: '"Raleway", Arial, sans-serif',
    fontWeight: '700',
    alignSelf: "center",
};

const topListStyle = {
    width: "73%",
};

const resultListStyle = {
    width: "27%",
};

const Detail = () => (
    <Flexbox element="div" flexDirection="column" height="100%" width="100%">
        <Flexbox element="header" style={headerSectionStyle}>
            <div style={headerStyle}>Race Detail</div>
        </Flexbox>
        <Flexbox element="div" style={contentSectionStyle}>
            <Flexbox element="div" style={contentStyle} flexDirection="row">
                <Flexbox element="div" style={topListStyle}><TopList/></Flexbox>
                <Flexbox element="div" style={resultListStyle}><ResultList/></Flexbox>
            </Flexbox>
        </Flexbox>
    </Flexbox>);

export default Detail;
