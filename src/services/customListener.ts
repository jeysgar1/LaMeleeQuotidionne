import {
    LogEntry,
    LogListener,
    LogLevel
} from "@pnp/logging";

export class CustomListener implements LogListener {
    log(entry: LogEntry): void {
        if (entry.level == LogLevel.Error)
            console.log('Message from Custom Listener%c' + entry.message, "color:red;");
        else if (entry.level == LogLevel.Warning)
            console.log('Message from Custom Listener%c' + entry.message, "color:orange;");
        else if (entry.level == LogLevel.Info)
            console.log('Message from Custom Listener%c' + entry.message, "color:green;");
        else
            console.log('Message from Custom Listener%c' + entry.message, "color:blue;");
    }
}