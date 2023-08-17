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
import 'semantic-ui-css/semantic.min.css';
import * as React from "react";
import { Card, Message, Grid, Image } from 'semantic-ui-react';
var Initiative = /** @class */ (function (_super) {
    __extends(Initiative, _super);
    function Initiative(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { epicas: props._epicas, initiative: '', items: props._items, newInitiative: undefined, wantSearch: false, selectedInitiative: props._selected };
        console.log("Initiative > render()", _this.props);
        return _this;
    }
    Initiative.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return (React.createElement(Grid, { columns: 'equal' },
            React.createElement(Grid.Row, null,
                React.createElement(Grid.Column, { width: 8 },
                    React.createElement(Card, { fluid: true },
                        React.createElement(Image, { src: require('../assets/icon.svg'), wrapped: true, ui: false }),
                        React.createElement(Card.Content, null,
                            React.createElement(Card.Header, null, (_a = this.props._selected) === null || _a === void 0 ? void 0 : _a.Title),
                            React.createElement(Card.Meta, null, (_b = this.props._selected) === null || _b === void 0 ? void 0 : _b.Nombre))),
                    ((_c = this.props._selected) === null || _c === void 0 ? void 0 : _c.Necesidad) &&
                        React.createElement(Message, { color: "purple" },
                            React.createElement(Message.Header, null, "\u00BFNecesidad del usuario?"),
                            React.createElement("p", null, (_d = this.props._selected) === null || _d === void 0 ? void 0 : _d.Necesidad)),
                    ((_e = this.props._selected) === null || _e === void 0 ? void 0 : _e.Alcance) &&
                        React.createElement(Message, { color: "olive" },
                            React.createElement(Message.Header, null, "\u00BFAlcance t\u00E9cnico?"),
                            React.createElement("p", null, (_f = this.props._selected) === null || _f === void 0 ? void 0 : _f.Alcance))),
                React.createElement(Grid.Column, null,
                    ((_g = this.props._selected) === null || _g === void 0 ? void 0 : _g.Restricciones) &&
                        React.createElement(Message, { color: "red" },
                            React.createElement(Message.Header, null, "\u00BFRestricciones?"),
                            React.createElement("p", null, (_h = this.props._selected) === null || _h === void 0 ? void 0 : _h.Restricciones)),
                    ((_j = this.props._selected) === null || _j === void 0 ? void 0 : _j.Supuestos) &&
                        React.createElement(Message, { color: "yellow" },
                            React.createElement(Message.Header, null, "\u00BFSupuestos?"),
                            React.createElement("p", null, (_k = this.props._selected) === null || _k === void 0 ? void 0 : _k.Supuestos)),
                    ((_l = this.props._selected) === null || _l === void 0 ? void 0 : _l.Consideraciones) &&
                        React.createElement(Message, { color: "blue" },
                            React.createElement(Message.Header, null, "Consideraciones?"),
                            React.createElement("p", null, (_m = this.props._selected) === null || _m === void 0 ? void 0 : _m.Consideraciones))))));
    };
    return Initiative;
}(React.Component));
export default Initiative;
//# sourceMappingURL=Initiative.js.map