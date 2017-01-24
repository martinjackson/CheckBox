'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAutobind = require('react-autobind');

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = function (_React$Component) {
  _inherits(CheckBox, _React$Component);

  function CheckBox(props) {
    _classCallCheck(this, CheckBox);

    var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

    (0, _reactAutobind2.default)(_this);
    return _this;
  }

  _createClass(CheckBox, [{
    key: 'handle',
    value: function handle(e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      e.target.name = this.props.name;
      e.target.value = this.props.match === this.props.value ? '' : this.props.value;
      this.props.onChange(e);
    }
  }, {
    key: 'render',
    value: function render() {

      /*
        ☐  U+2610 &#9744;  Ballot Box
        ☑  U+2611 &#9745;  Ballot Box with Check
        ☒  U+2612 &#9746;  Ballot Box with X
      */

      var transparent = {
        backgroundColor: 'Transparent',
        backgroundRepeat: 'no-repeat',
        border: 'none',
        cursor: 'pointer',
        overflow: 'hidden',
        outline: 'none',
        color: 'inherit' // dont default to color: buttontext, wont match the current theme
      };

      if (this.props.color) {
        transparent.color = this.props.color;
      }

      var checked = this.props.match === this.props.value;
      var symbol = checked ? String.fromCharCode(9745) : String.fromCharCode(9744);
      return _react2.default.createElement(
        'button',
        { type: 'button', onClick: this.handle, style: transparent },
        symbol,
        this.props.text
      );
    }
  }]);

  return CheckBox;
}(_react2.default.Component);

exports.default = CheckBox;
