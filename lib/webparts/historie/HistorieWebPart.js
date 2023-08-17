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
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneTextField, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import Historie from "./components/Historie";
var HistorieWebPart = /** @class */ (function (_super) {
    __extends(HistorieWebPart, _super);
    function HistorieWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HistorieWebPart.prototype.render = function () {
        var element = React.createElement(Historie, {
            EpicaId: this.properties.EpicaId,
            Title: this.properties.Title,
            Necesidad: this.properties.Necesidad,
            Criterios: this.properties.Criterios,
            Nombre: this.properties.Nombre,
            ID: this.properties.ID
        });
        ReactDom.render(element, this.domElement);
    };
    HistorieWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(HistorieWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    HistorieWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: "Una historia de usuario es la transcripción que realiza un proxy de una necesidad de un usuario a una solicitud de implementación técnica",
                    },
                    groups: [
                        {
                            groupName: "",
                            groupFields: [
                                PropertyPaneTextField("Description", {
                                    label: "Escribe la historia de usuario de usuario",
                                    description: "Recuerda seguir el patrón Como un [] deseo [] para []",
                                    multiline: true,
                                    rows: 10,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return HistorieWebPart;
}(BaseClientSideWebPart));
export default HistorieWebPart;
//# sourceMappingURL=HistorieWebPart.js.map