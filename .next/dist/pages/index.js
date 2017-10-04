'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _layouts = require('../layouts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\dev\\www\\csag-authen-front\\pages\\index.js?entry';


var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);

        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layouts.Main, { title: 'Login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            }, _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            }, _react2.default.createElement('div', { className: 'col-sm-4 col-sm-offset-4', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement('div', { className: 'panel panel-base', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement('div', { className: 'panel-heading', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, 'Login'), _react2.default.createElement('div', { className: 'panel-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement('input', { type: 'text', className: 'form-control mb-15', placeholder: 'Username or Email', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }), _react2.default.createElement('input', { type: 'password', className: 'form-control  mb-15', placeholder: 'Password', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }), _react2.default.createElement('input', { type: 'button', value: 'Login', className: 'btn btn-info mb-15 full-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }), _react2.default.createElement('div', { style: { textAlign: "center", fontSize: "0.9em" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _react2.default.createElement('a', { href: '/register', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'Register'), ' | ', _react2.default.createElement('a', { href: '/forgotpass', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, 'Forgot Password')))))));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;