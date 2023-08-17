var LogData = /** @class */ (function () {
    function LogData(FileName, MethodName, StackTrace) {
        if (FileName === void 0) { FileName = ""; }
        if (MethodName === void 0) { MethodName = ""; }
        if (StackTrace === void 0) { StackTrace = ""; }
        this.FileName = FileName;
        this.MethodName = MethodName;
        this.StackTrace = StackTrace;
    }
    return LogData;
}());
export { LogData };
//# sourceMappingURL=LogData.js.map