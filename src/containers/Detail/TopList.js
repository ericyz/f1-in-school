import React from 'react'
import { Item } from 'semantic-ui-react'

const itemGroupStyle = {
  width: "100%"
}

const imageStyle = {
  width: "39px"
}

const contentStyle = {
  fontSize: "23px",
  marginRight: "68px",
}

const TopList = (props) => (
  <div>
    <Item.Group style={itemGroupStyle} split>
      {props.results.map(result => (<Item>
        <Item.Image size='tiny' style={imageStyle}>{result.netlapTime}</Item.Image>
        <Item.Content verticalAlign='middle' >
          <span style={contentStyle}>{result.reactionTime}</span><span style={contentStyle}>{result.grossLapTime}</span><span style={contentStyle}>{result.team}</span>
        </Item.Content>
      </Item>)
      )}
    </Item.Group>
  </div>
)

export default TopList;