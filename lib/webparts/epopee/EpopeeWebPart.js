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
import * as ReactDom from "react-dom";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import Epopee from "./components/Epopee";
import { store } from '../../store';
import { Provider } from 'react-redux';
var EpopeeWebPart = /** @class */ (function (_super) {
    __extends(EpopeeWebPart, _super);
    function EpopeeWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EpopeeWebPart.prototype.render = function () {
        var element = React.createElement(Epopee, {
            context: this.context
        });
        var provider = React.createElement(Provider, {
            store: store,
            children: element
        });
        ReactDom.render(provider, this.domElement);
    };
    EpopeeWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(EpopeeWebPart.prototype, "disableReactivePropertyChanges", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    EpopeeWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Una épica es un conjunto de pequeñas unidades de trabajo (llamadas historias de usuario) que comparten un mismo objetivo",
                    },
                    groups: [
                        {
                            groupName: "",
                            groupFields: [],
                        },
                    ],
                },
            ],
        };
    };
    return EpopeeWebPart;
}(BaseClientSideWebPart));
export default EpopeeWebPart;
//# sourceMappingURL=EpopeeWebPart.js.map