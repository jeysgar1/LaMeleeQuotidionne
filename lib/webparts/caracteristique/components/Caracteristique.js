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
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { Badge, Card, Stack } from "react-bootstrap";
var Caracteristique = /** @class */ (function (_super) {
    __extends(Caracteristique, _super);
    function Caracteristique(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Caracteristique.prototype.render = function () {
        return (React.createElement(Card, { bg: "success", key: this.props.name, text: "white", style: { width: "18rem", borderRadius: "10px", padding: "5px" }, className: "mb-2" },
            React.createElement(Card.Header, null, this.props.name),
            React.createElement(Card.Body, null,
                React.createElement(Card.Title, null, this.props.description)),
            React.createElement(Card.Footer, null,
                React.createElement(Stack, { direction: "horizontal", gap: 2 },
                    React.createElement(Badge, { bg: "light", text: "dark" }, this.props.appKey),
                    React.createElement(Badge, { bg: "light", text: "dark" }, this.props.channelKey)))));
    };
    return Caracteristique;
}(React.Component));
export default Caracteristique;
//# sourceMappingURL=Caracteristique.js.map