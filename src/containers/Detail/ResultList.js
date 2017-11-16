import React from 'react';
import { Table } from 'semantic-ui-react';

const tableStyle = {
  fontSize: "15px"
}
const ResultList = (props) => (<div>
  <Table striped style={tableStyle}>
    <Table.Body>
      {props.results.map(result =>
        (<Table.Row textAlign='center'>
          <Table.Cell>{result.netlapTime} - {result.team}</Table.Cell>
        </Table.Row>))}
    </Table.Body>
  </Table>
</div>);

export default ResultList;    
