'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = undefined;

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\dev\\www\\csag-authen-front\\layouts\\Main.js';
var Main = exports.Main = function (_Component) {
    (0, _inherits3.default)(Main, _Component);

    function Main(props) {
        (0, _classCallCheck3.default)(this, Main);

        return (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).call(this, props));
    }

    (0, _createClass3.default)(Main, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement(_components.Header, { title: this.props.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }), this.props.children, _react2.default.createElement(_components.Footer, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }));
        }
    }]);

    return Main;
}(_react.Component);