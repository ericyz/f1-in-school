import React from 'react'
import Flexbox from 'flexbox-react';
import { Item } from 'semantic-ui-react'

const itemGroupStyle = {
  width: "100%"
}

const imageStyle = {
  width: "39px",
  marginRight: "55px",
  fontSize: "24px",
  height: "35px",
}

const contentStyle = {
  fontSize: "23px",
  width: "120px"
}

const TopList = (props) => (
  <div>
    <Item.Group style={itemGroupStyle} split>
      {props.results.map(result => (
        <Item>
          <Flexbox element="div">
            <Flexbox alignContent="center">
              <Item.Image size='tiny' style={imageStyle}>{result.netlapTime}</Item.Image>
            </Flexbox>
          </Flexbox>
          <Item.Content verticalAlign='middle' >
            <Flexbox flexDirection="row" alignContent="center">
              <Flexbox>
                <span style={contentStyle}>{result.reactionTime}s</span>
              </Flexbox>
              <Flexbox>
                <span style={contentStyle}>{result.grossLapTime}s</span>
              </Flexbox>
              <Flexbox>
                <span style={contentStyle}>{result.team}s</span>
              </Flexbox>
            </Flexbox>
          </Item.Content>
        </Item>)
      )}
    </Item.Group>
  </div>
);

export default TopList;