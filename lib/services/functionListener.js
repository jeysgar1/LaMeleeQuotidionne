import { FunctionListener } from "@pnp/logging";
export var functionlistener = new FunctionListener(function (entry) {
    if (entry.level == 3 /* Error */)
        console.log('Message from FunctionListener%c' + entry.message, "color:red;");
    else if (entry.level == 2 /* Warning */)
        console.log('Message from FunctionListener%c' + entry.message, "color:orange;");
    else if (entry.level == 1 /* Info */)
        console.log('Message from FunctionListener%c' + entry.message, "color:green;");
    else
        console.log('Message from FunctionListener%c' + entry.message, "color:blue;");
});
//# sourceMappingURL=functionListener.js.map