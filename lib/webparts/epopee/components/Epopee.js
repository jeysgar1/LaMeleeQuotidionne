import 'semantic-ui-css/semantic.min.css';
import * as React from "react";
import { Container, Item, Segment, Dropdown, Message, Divider } from 'semantic-ui-react';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { getEpopeeByInitiative } from '../slices/getByInitiative';
var iniciativas;
var epicas;
var dispatch;
function ViewItem(element) {
    return (React.createElement(Item, null,
        React.createElement(Item.Image, { size: 'small', src: require('../assets/icon.svg') }),
        React.createElement(Item.Content, null,
            React.createElement(Item.Header, null, element.Title),
            React.createElement(Item.Description, null, element.Necesidad),
            React.createElement(Item.Extra, null))));
}
function View() {
    var _a;
    return (React.createElement(Container, null,
        React.createElement(Item.Group, { divided: true }, (_a = epicas.items) === null || _a === void 0 ? void 0 : _a.map(function (element) {
            ViewItem(element);
        }))));
}
function Epopee(props) {
    epicas = useAppSelector(function (state) { return state.epopees; });
    dispatch = useAppDispatch();
    var page = epicas.initiative ? View() : SelectOne();
    return (page);
}
var SelectOne = function () {
    var _a;
    var indexSelected = [];
    if (iniciativas.items) {
        (_a = iniciativas.items) === null || _a === void 0 ? void 0 : _a.map(function (element) {
            indexSelected.push({
                key: element.Nombre,
                text: element.Nombre,
                value: element.ID,
                image: { avatar: true, src: require('../assets/icon.svg') },
            });
        });
        return (React.createElement("div", null,
            React.createElement(Message, { style: { textAlign: "center" }, size: "big", color: "blue", header: '\u00A1Estamos listos! :)', content: React.createElement(Container, null,
                    React.createElement(Segment.Group, null,
                        React.createElement(Segment, null,
                            React.createElement(Divider, { horizontal: true }, "Selecciona una iniciativa")),
                        React.createElement(Segment, null,
                            React.createElement(Dropdown, { fluid: true, search: true, searchInput: { type: 'text' }, selection: true, options: indexSelected, onChange: function (event, data) { return dispatch(getEpopeeByInitiative(data.value)); }, placeholder: 'Selecciona una iniciativa' })))) })));
    }
    else {
        return (React.createElement(Message, { negative: true },
            React.createElement(Message.Header, null, "\u00A1Houston tenemos problemas! No encontramos ninguna iniciativa que puedas gestionar "),
            React.createElement("p", null, "Estamos trabajando a toda marcha por una versi\u00F3n que permita crear una iniciativa, vuelve pronto :)")));
    }
};
export default Epopee;
//# sourceMappingURL=Epopee.js.map