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
import { Container, Item } from 'semantic-ui-react';
import Historie from '../../historie/components/Historie';
var Epopee = /** @class */ (function (_super) {
    __extends(Epopee, _super);
    function Epopee(props) {
        var _this = _super.call(this, props) || this;
        _this.projectHistorias = function (element) {
            var _a, _b;
            console.log("Historias " + element.Historias);
            if (((_a = element.Historias) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
                return (_b = element.Historias) === null || _b === void 0 ? void 0 : _b.map(function (historia) {
                    React.createElement(Historie, { EpicaId: historia.EpicaId, Criterios: historia.Criterios, ID: 0, Necesidad: historia.Necesidad, Title: historia.Title, Nombre: element.Nombre });
                });
            }
        };
        _this.projectCards = function () {
            if (_this.props._items.length !== 0) {
                return _this.props._items.map(function (element) {
                    return React.createElement(Item, null,
                        React.createElement(Item.Image, { size: 'small', src: require('../assets/icon.svg') }),
                        React.createElement(Item.Content, null,
                            React.createElement(Item.Header, null, element.Title),
                            React.createElement(Item.Description, null, element.Necesidad),
                            React.createElement(Item.Extra, null, _this.projectHistorias(element))));
                });
            }
        };
        _this.state = { items: props._items, historias: props.Historias };
        console.log("Epopee > render()", _this.props);
        return _this;
    }
    Epopee.prototype.componentDidMount = function () {
        this.state = { items: this.state.items, historias: this.state.historias };
    };
    Epopee.prototype.render = function () {
        return (React.createElement(Container, null,
            React.createElement(Item.Group, { divided: true }, this.projectCards())));
    };
    return Epopee;
}(React.Component));
export default Epopee;
//# sourceMappingURL=Epopee.js.map