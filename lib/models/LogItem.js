var LogItem = /** @class */ (function () {
    function LogItem(ApplicationName, CodeFileName, MethodName, LoggedOn, LoggedById, ErrorMessage, StackTrace) {
        if (ApplicationName === void 0) { ApplicationName = ""; }
        if (CodeFileName === void 0) { CodeFileName = ""; }
        if (MethodName === void 0) { MethodName = ""; }
        if (LoggedOn === void 0) { LoggedOn = new Date(); }
        if (LoggedById === void 0) { LoggedById = 0; }
        if (ErrorMessage === void 0) { ErrorMessage = ""; }
        if (StackTrace === void 0) { StackTrace = ""; }
        this.ApplicationName = ApplicationName;
        this.CodeFileName = CodeFileName;
        this.MethodName = MethodName;
        this.LoggedOn = LoggedOn;
        this.LoggedById = LoggedById;
        this.ErrorMessage = ErrorMessage;
        this.StackTrace = StackTrace;
    }
    return LogItem;
}());
export { LogItem };
//# sourceMappingURL=LogItem.js.map