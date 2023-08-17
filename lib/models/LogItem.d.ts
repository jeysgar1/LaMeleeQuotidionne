import { ILogItem } from "./ILogItem";
export declare class LogItem implements ILogItem {
    ApplicationName: string;
    CodeFileName: string;
    MethodName: string;
    LoggedOn: Date;
    LoggedById: number;
    ErrorMessage: string;
    StackTrace: string;
    constructor(ApplicationName?: string, CodeFileName?: string, MethodName?: string, LoggedOn?: Date, LoggedById?: number, ErrorMessage?: string, StackTrace?: string);
}
//# sourceMappingURL=LogItem.d.ts.map