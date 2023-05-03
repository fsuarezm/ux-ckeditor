"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classiceditor = _interopRequireDefault(require("@ckeditor/ckeditor5-editor-classic/src/classiceditor.js"));
var _alignment = _interopRequireDefault(require("@ckeditor/ckeditor5-alignment/src/alignment.js"));
var _autoformat = _interopRequireDefault(require("@ckeditor/ckeditor5-autoformat/src/autoformat.js"));
var _blockquote = _interopRequireDefault(require("@ckeditor/ckeditor5-block-quote/src/blockquote.js"));
var _bold = _interopRequireDefault(require("@ckeditor/ckeditor5-basic-styles/src/bold.js"));
var _essentials = _interopRequireDefault(require("@ckeditor/ckeditor5-essentials/src/essentials.js"));
var _heading = _interopRequireDefault(require("@ckeditor/ckeditor5-heading/src/heading.js"));
var _indent = _interopRequireDefault(require("@ckeditor/ckeditor5-indent/src/indent.js"));
var _italic = _interopRequireDefault(require("@ckeditor/ckeditor5-basic-styles/src/italic.js"));
var _link = _interopRequireDefault(require("@ckeditor/ckeditor5-link/src/link.js"));
var _list = _interopRequireDefault(require("@ckeditor/ckeditor5-list/src/list.js"));
var _mention = _interopRequireDefault(require("@ckeditor/ckeditor5-mention/src/mention.js"));
var _paragraph = _interopRequireDefault(require("@ckeditor/ckeditor5-paragraph/src/paragraph.js"));
var _pastefromoffice = _interopRequireDefault(require("@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice"));
var _table = _interopRequireDefault(require("@ckeditor/ckeditor5-table/src/table.js"));
var _tabletoolbar = _interopRequireDefault(require("@ckeditor/ckeditor5-table/src/tabletoolbar.js"));
var _texttransformation = _interopRequireDefault(require("@ckeditor/ckeditor5-typing/src/texttransformation.js"));
var _generalhtmlsupport = _interopRequireDefault(require("@ckeditor/ckeditor5-html-support/src/generalhtmlsupport"));
var _sourceediting = _interopRequireDefault(require("@ckeditor/ckeditor5-source-editing/src/sourceediting"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } /**
                                                                                                                                                                                                                      * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
                                                                                                                                                                                                                      * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
                                                                                                                                                                                                                      */ // import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage.js';
var Editor = /*#__PURE__*/function (_ClassicEditor) {
  _inherits(Editor, _ClassicEditor);
  var _super = _createSuper(Editor);
  function Editor() {
    _classCallCheck(this, Editor);
    return _super.apply(this, arguments);
  }
  return _createClass(Editor);
}(_classiceditor["default"]); // Plugins to include in the build.
Editor.builtinPlugins = [_alignment["default"], _autoformat["default"], _blockquote["default"], _bold["default"], _essentials["default"], _heading["default"], _indent["default"], _italic["default"], _link["default"], _list["default"], _mention["default"], _paragraph["default"], _pastefromoffice["default"], _table["default"], _tabletoolbar["default"], _texttransformation["default"], _generalhtmlsupport["default"], _sourceediting["default"]];
Editor.defaultConfig = {
  toolbar: {
    items: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'outdent', 'indent', 'alignment', '|', 'blockQuote', 'insertTable', 'undo', 'redo', '|', 'sourceEditing']
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  },
  htmlSupport: {
    allow: [{
      name: /.*/,
      attributes: true,
      classes: true,
      styles: true
    }]
  }
};
var _default = Editor;
exports["default"] = _default;