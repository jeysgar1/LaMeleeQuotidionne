import 'semantic-ui-css/semantic.min.css';
import * as React from "react";
import { EpopeeProps } from '../models/EpopeeProps';
import { EpopeeState } from '../models/EpopeeState';
import { EpopeeType } from '../models/EpopeeType';
export default class Epopee extends React.Component<EpopeeProps, EpopeeState> {
    constructor(props: EpopeeProps);
    componentDidMount(): void;
    projectHistorias: (element: EpopeeType) => void[] | undefined;
    projectCards: () => JSX.Element[] | undefined;
    render(): JSX.Element;
}
//# sourceMappingURL=Epopee.d.ts.map