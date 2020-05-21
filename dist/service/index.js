"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = express_1["default"]();
var port = 3001;
app.get('/', function (req, res) {
    res.send('Hello World! dsdss');
});
app.get('/about', function (req, res) {
    res.send('about');
});
app.get('/test/:id', function (req, res) {
    res.send({
        status: 0,
        id: req.params.id || null,
        datas: 'hello world 2'
    });
});
app.listen(port, function () { return console.log("Example app listening at http://localhost:" + port); });
//# sourceMappingURL=index.js.map