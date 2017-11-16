import React from 'react';
import { Table } from 'semantic-ui-react';

const tableStyle = {
    fontSize: "15px"
}
const ResultList = () => (<div>
    <Table striped style={tableStyle}>
    <Table.Body>
      <Table.Row textAlign='center'>
        <Table.Cell>John</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
</div>);

export default ResultList;    
