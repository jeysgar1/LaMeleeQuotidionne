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
import * as React from 'react';
import { Item } from 'semantic-ui-react';
var Tache = /** @class */ (function (_super) {
    __extends(Tache, _super);
    function Tache(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Tache.prototype.render = function () {
        return (React.createElement(Item, null,
            React.createElement(Item.Image, { size: 'tiny', src: require('../assets/icon.svg') }),
            React.createElement(Item.Content, null,
                React.createElement(Item.Header, null, this.props.Title),
                React.createElement(Item.Description, null, this.props.Necesidad))));
    };
    return Tache;
}(React.Component));
export default Tache;
//# sourceMappingURL=Tache.js.map