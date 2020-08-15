var XLSX = require('xlsx');
const { realpathSync } = require('fs');
var workbook = XLSX.readFile('../sj_master_2020_AUG_dummy.csv');
var data = XLSX.utils.sheet_to_json

const header = ['ID', 'Name', 'Address', 'Gender', 'Designation', 'Age'];

class dataRows extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.address}</td>
        <td>{data.gender}</td>
        <td>{data.designation}</td>
        <td>{data.age}</td>
      </tr>
    );
  }
} 

class dataTable extends React.Component {

  render() {
    const dataRows = data
    return (
      <table>
        <div>This is a table.</div>
        <thead>
          <tr>
            <th>{data.id}</th>
            <th>{data.name}</th>
            <th>{data.address}</th>
            <th>{data.gender}</th>
            <th>{data.Designation}</th>
            <th>{data.age}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {dataRow}
          </tr>
        </tbody>
      </table>
    );
  }
} 

class dataList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Web Page Teaching</h1>
        <dataTable />
      </React.Fragment>
    );
  }
} 

const element = <dataList />;
ReactDOM.render(element, document.getElementById('contents'));
