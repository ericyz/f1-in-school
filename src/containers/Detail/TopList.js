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

const TopList = () => (
  <div>
    <Item.Group style={itemGroupStyle} split>
      <Item>
        <Item.Image size='tiny' src='https://github.com/Semantic-Org/Semantic-UI-React/raw/master/docs/app/logo.png' style={imageStyle} />
        <Item.Content verticalAlign='middle' >
          <span style={contentStyle}>data 1</span><span style={contentStyle}>data2</span><span style={contentStyle}>data3</span>
        </Item.Content>
      </Item>

      <Item>
        <Item.Image size='tiny' src='https://github.com/Semantic-Org/Semantic-UI-React/raw/master/docs/app/logo.png' style={imageStyle} />
        <Item.Content verticalAlign='middle' >
          <span style={contentStyle}>data 1</span><span style={contentStyle}>data2</span><span style={contentStyle}>data3</span>
        </Item.Content>
      </Item>
    </Item.Group>
  </div>
)

export default TopList;