"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArcInstance = exports.Application = exports.ApplicationEvents = exports.ArcHttpApplication = void 0;
var collects_1 = require("../../ioc/collects");
var ArcServer_1 = require("./ArcServer");
Object.defineProperty(exports, "ArcHttpApplication", { enumerable: true, get: function () { return ArcServer_1.ArcHttpApplication; } });
var node_events_1 = require("node:events");
var ApplicationEvents = new node_events_1.EventEmitter();
exports.ApplicationEvents = ApplicationEvents;
var Application;
(function (Application) {
    Application["LOAD_SERVER"] = "loadserver";
    Application["LOAD_PIPE"] = "loadpipe";
    Application["LOAD_LISTEN"] = "loadlisten";
    Application["LOAD_CONFIG"] = "loadconfig";
    Application["LOAD_DATABASE"] = "loaddatabase";
    Application["LOAD_INIT"] = "loadinit";
})(Application || (Application = {}));
exports.Application = Application;
function ArcInstance(BASE) {
    var hasInst = collects_1.IocMap.get(BASE.name);
    if (hasInst) {
        return hasInst;
    }
    else {
        var INST = new BASE();
        collects_1.IocMap.set(BASE.name, INST);
        return INST;
    }
}
exports.ArcInstance = ArcInstance;
