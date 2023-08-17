import { ILogData } from "./ILogData";

export class LogData implements ILogData {
    constructor(
        public FileName: string = "",
        public MethodName: string = "",
        public StackTrace: string = ""
    ) { }
}