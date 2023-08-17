export interface ILogItem {
    ApplicationName: string;
    CodeFileName: string;
    MethodName: string;
    LoggedOn: Date;
    LoggedById: number;
    ErrorMessage: string;
    StackTrace: string;
}