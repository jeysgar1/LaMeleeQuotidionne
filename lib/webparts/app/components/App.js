var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import "semantic-ui-css/semantic.min.css";
import * as React from "react";
import { Item } from "semantic-ui-react";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement(Item.Group, null,
            React.createElement(Item, null,
                React.createElement(Item.Image, { size: 'tiny', src: require("../assets/icon.png") }),
                React.createElement(Item.Content, null,
                    React.createElement(Item.Header, { as: 'a' }, this.props.Name),
                    React.createElement(Item.Meta, null, this.props.Description)))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map