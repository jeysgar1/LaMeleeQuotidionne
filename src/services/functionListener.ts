import {
    FunctionListener,
    LogLevel,
    LogEntry
} from "@pnp/logging";

export const functionlistener = new FunctionListener((entry: LogEntry) => {
    if (entry.level == LogLevel.Error)
        console.log('Message from FunctionListener%c' + entry.message, "color:red;");
    else if (entry.level == LogLevel.Warning)
        console.log('Message from FunctionListener%c' + entry.message, "color:orange;");
    else if (entry.level == LogLevel.Info)
        console.log('Message from FunctionListener%c' + entry.message, "color:green;");
    else
        console.log('Message from FunctionListener%c' + entry.message, "color:blue;");
});