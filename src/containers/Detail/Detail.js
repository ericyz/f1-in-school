import React from 'react';
import Flexbox from 'flexbox-react';
import TopList from './TopList';
import ResultList from './ResultList';
import Header from '../../components/Header/Header';
import { compose } from 'react-komposer';
import { getRaceProxy } from './../../api/racesApi';
import { sortBy, first } from 'underscore';

const contentSectionStyle = {
    width: "100%",
    // height: "50px"
    justifyContent: "center"
};


const contentStyle = {
    width: "40em",
    fontSize: "30px",
    color: "white",
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

const Detail = ({ results }) => {
    const bestFourResults = first(sortBy(results, s => s.netlapTime), 4);

    return (<Flexbox element="div" flexDirection="column" height="100%" width="100%">
        <Header text="Race Detail" />

        <Flexbox element="div" style={contentSectionStyle}>
            <Flexbox element="div" style={contentStyle} flexDirection="row">
                <Flexbox element="div" style={topListStyle}>
                    <TopList results={[{netlapTime: 'Netlap Time'
                    , reactionTime: 'Reaction Time'
                    , grossLapTime: 'Gross Lap Time'
                    , team: 'Team'},
                    ... bestFourResults]} />
                </Flexbox>
                <Flexbox element="div" style={resultListStyle} ><ResultList results={results} /></Flexbox>
            </Flexbox>
        </Flexbox>
    </Flexbox>)
};

function detailPageLoader(props, onData) {
    const eventId = props.params.id;

    getRaceProxy(eventId).then(results => {
        onData(null, {
            results: results
        });
    });

}
export default compose(detailPageLoader)(Detail);
