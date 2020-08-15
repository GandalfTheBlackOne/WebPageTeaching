"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var XLSX = require('xlsx');

var _require = require('fs'),
    realpathSync = _require.realpathSync;

var workbook = XLSX.readFile('../sj_master_2020_AUG_dummy.csv');
var data = XLSX.utils.sheet_to_json;
var header = ['ID', 'Name', 'Address', 'Gender', 'Designation', 'Age'];

var dataRows = /*#__PURE__*/function (_React$Component) {
  _inherits(dataRows, _React$Component);

  var _super = _createSuper(dataRows);

  function dataRows() {
    _classCallCheck(this, dataRows);

    return _super.apply(this, arguments);
  }

  _createClass(dataRows, [{
    key: "render",
    value: function render() {
      var data = this.props.data;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, data.id), /*#__PURE__*/React.createElement("td", null, data.name), /*#__PURE__*/React.createElement("td", null, data.address), /*#__PURE__*/React.createElement("td", null, data.gender), /*#__PURE__*/React.createElement("td", null, data.designation), /*#__PURE__*/React.createElement("td", null, data.age));
    }
  }]);

  return dataRows;
}(React.Component);

var dataTable = /*#__PURE__*/function (_React$Component2) {
  _inherits(dataTable, _React$Component2);

  var _super2 = _createSuper(dataTable);

  function dataTable() {
    _classCallCheck(this, dataTable);

    return _super2.apply(this, arguments);
  }

  _createClass(dataTable, [{
    key: "render",
    value: function render() {
      var dataRows = data;
      return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("div", null, "This is a table."), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, data.id), /*#__PURE__*/React.createElement("th", null, data.name), /*#__PURE__*/React.createElement("th", null, data.address), /*#__PURE__*/React.createElement("th", null, data.gender), /*#__PURE__*/React.createElement("th", null, data.Designation), /*#__PURE__*/React.createElement("th", null, data.age))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, dataRow)));
    }
  }]);

  return dataTable;
}(React.Component);

var dataList = /*#__PURE__*/function (_React$Component3) {
  _inherits(dataList, _React$Component3);

  var _super3 = _createSuper(dataList);

  function dataList() {
    _classCallCheck(this, dataList);

    return _super3.apply(this, arguments);
  }

  _createClass(dataList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Web Page Teaching"), /*#__PURE__*/React.createElement("dataTable", null));
    }
  }]);

  return dataList;
}(React.Component);

var element = /*#__PURE__*/React.createElement("dataList", null);
ReactDOM.render(element, document.getElementById('contents'));