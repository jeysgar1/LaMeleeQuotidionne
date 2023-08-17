declare interface IInitiativeWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  NameFieldLabel: string;
  ScopeFieldLabel: string;
  IdFieldLabel:string;
}

declare module 'InitiativeWebPartStrings' {
  const strings: IInitiativeWebPartStrings;
  export = strings;
}
