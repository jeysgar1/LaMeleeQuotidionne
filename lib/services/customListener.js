var CustomListener = /** @class */ (function () {
    function CustomListener() {
    }
    CustomListener.prototype.log = function (entry) {
        if (entry.level == 3 /* Error */)
            console.log('Message from Custom Listener%c' + entry.message, "color:red;");
        else if (entry.level == 2 /* Warning */)
            console.log('Message from Custom Listener%c' + entry.message, "color:orange;");
        else if (entry.level == 1 /* Info */)
            console.log('Message from Custom Listener%c' + entry.message, "color:green;");
        else
            console.log('Message from Custom Listener%c' + entry.message, "color:blue;");
    };
    return CustomListener;
}());
export { CustomListener };
//# sourceMappingURL=customListener.js.map