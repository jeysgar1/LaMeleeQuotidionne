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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import 'semantic-ui-css/semantic.min.css';
import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { PropertyPaneDropdown, } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import Epopee from "./components/Epopee";
import { InitiativeType } from "../initiative/models/InitiativeType";
import { spfxConnect } from "../../services";
var EpopeeWebPart = /** @class */ (function (_super) {
    __extends(EpopeeWebPart, _super);
    function EpopeeWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selected = new InitiativeType();
        return _this;
    }
    EpopeeWebPart.prototype.render = function () {
        var element = React.createElement(Epopee, {
            _items: this._epicas,
            Title: this.properties.Title,
            Necesidad: this.properties.Necesidad,
            Nombre: this.properties.Nombre,
            ID: this.properties.ID,
            IniciativaId: this.properties.IniciativaId,
            Historias: this._historias
        });
        ReactDom.render(element, this.domElement);
    };
    EpopeeWebPart.prototype.onInit = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var epicasList, _c, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this._sp = spfxConnect(this.context);
                        this._iList = this._sp.web.lists.getByTitle("Iniciativas");
                        epicasList = this._sp.web.lists.getByTitle("Epicas");
                        _c = this;
                        return [4 /*yield*/, this._iList.items()];
                    case 1:
                        _c._items = _e.sent();
                        _d = this;
                        return [4 /*yield*/, epicasList.items()];
                    case 2:
                        _d._epicas = _e.sent();
                        if (this._items && this._items.length > 0) {
                            this._selected = this._items[0];
                            this._selected.Epicas = (_a = this._epicas) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item.IniciativaId == _this._selected.ID; });
                            console.log("Iniciativa seleccionada : " + JSON.stringify(this._selected));
                        }
                        this._options = [];
                        (_b = this._items) === null || _b === void 0 ? void 0 : _b.forEach(function (element) {
                            _this._options.push({
                                key: element.Title,
                                text: element.Title
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EpopeeWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(EpopeeWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse("1.0");
        },
        enumerable: false,
        configurable: true
    });
    EpopeeWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var epicasList, historiasList, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(propertyPath === "Title")) return [3 /*break*/, 3];
                        epicasList = this._sp.web.lists.getByTitle("Epicas");
                        historiasList = this._sp.web.lists.getByTitle("Historias de usuario");
                        _b = this;
                        return [4 /*yield*/, epicasList.items()];
                    case 1:
                        _b._epicas = _d.sent();
                        _c = this;
                        return [4 /*yield*/, historiasList.items()];
                    case 2:
                        _c._historias = _d.sent();
                        this._epicas = (_a = this._epicas) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item.IniciativaId == _this._selected.ID; });
                        console.log("Epicas a mostrar : " + JSON.stringify(this._epicas));
                        this._epicas.forEach(function (element) {
                            var _a;
                            element.Historias = (_a = _this._historias) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item.EpicaId == element.ID; });
                        });
                        this.context.propertyPane.refresh();
                        this.render();
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
                            groupFields: [
                                PropertyPaneDropdown('Title', {
                                    label: 'Selecciona una iniciativa',
                                    options: this._options
                                })
                            ],
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