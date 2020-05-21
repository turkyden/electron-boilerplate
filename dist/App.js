"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_hot_loader_1 = require("react-hot-loader");
var react_1 = __importDefault(require("react"));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            content: ''
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        fetch("http://127.0.0.1:3001/test/2", {
            method: "GET"
        }).then(function (res) { return res.json(); })
            .then(function (data) {
            _this.setState({ content: data.datas });
        });
    };
    App.prototype.render = function () {
        var content = this.state.content;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null,
                content,
                " :) ha")));
    };
    return App;
}(react_1["default"].Component));
exports["default"] = react_hot_loader_1.hot(module)(App);
//# sourceMappingURL=App.js.map