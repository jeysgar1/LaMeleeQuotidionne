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
import * as React from 'react';
import { Button, Item, Modal } from 'semantic-ui-react';
var ApiDataType = /** @class */ (function (_super) {
    __extends(ApiDataType, _super);
    function ApiDataType(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ApiDataType.prototype.render = function () {
        return (React.createElement(Item.Group, null,
            React.createElement(Item, null,
                React.createElement(Item.Image, { size: 'tiny', src: require('../assets/icon.png') }),
                React.createElement(Item.Content, null,
                    React.createElement(Item.Header, null, this.props.Name),
                    React.createElement(Item.Meta, null,
                        React.createElement("span", { className: 'stay' }, this.props.Version)),
                    React.createElement(Item.Description, null, this.props.Description),
                    React.createElement(Modal, { trigger: React.createElement(Button, null, "Ver especificaci\u00F3n"), header: 'Especificaci\u00F3n t\u00E9cnica', content: React.createElement("div", { dangerouslySetInnerHTML: { __html: this.props.HtmlCode } }), actions: [{ key: 'done', content: 'Listo!', positive: true }] })))));
    };
    return ApiDataType;
}(React.Component));
export default ApiDataType;
//# sourceMappingURL=ApiDataType.js.map