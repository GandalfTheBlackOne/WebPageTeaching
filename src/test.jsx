import XLSX from 'xlsx';
class Test extends React.Component {
    render() {
        var wb = XLSX.readFile("../data/employee.csv");
        var first_worksheet = wb.Sheets[wb.SheetNames[0]];
        var data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });

        return (
            <div>{data}</div>
        );
    }
}
const element = <Test />;

ReactDOM.render(element, document.getElementById('Test'));

