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
import { List, Image, Button, Modal } from "semantic-ui-react";
var Historie = /** @class */ (function (_super) {
    __extends(Historie, _super);
    function Historie(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Historie.prototype.render = function () {
        return (React.createElement(List.Item, null,
            React.createElement(Image, { avatar: true, src: require('../assets/icon.svg') }),
            React.createElement(List.Content, { floated: 'right' },
                React.createElement(Modal, { trigger: React.createElement(Button, { color: 'teal' }, "Criterios de aceptaci\u00F3n"), header: 'Criterios de aceptaci\u00F3n', content: this.props.Criterios, actions: ['¡Entendido!'] }),
                React.createElement(Modal, { trigger: React.createElement(Button, { color: 'blue' }, "Tareas"), header: 'Tareas', content: this.props.Criterios, actions: ['¡Entendido!'] })),
            React.createElement(List.Content, null,
                React.createElement(List.Header, { as: 'a' }, this.props.Title),
                React.createElement(List.Description, null, this.props.Necesidad))));
    };
    return Historie;
}(React.Component));
export default Historie;
//# sourceMappingURL=Historie.js.map