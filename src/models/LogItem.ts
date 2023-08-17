import { ILogItem } from "./ILogItem";

export class LogItem implements ILogItem {
    constructor(
        public ApplicationName: string = "",
        public CodeFileName: string = "",
        public MethodName: string = "",
        public LoggedOn: Date = new Date(),
        public LoggedById: number = 0,
        public ErrorMessage: string = "",
        public StackTrace: string = ""
    ) { }
}