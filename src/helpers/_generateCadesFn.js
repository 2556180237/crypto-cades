"use strict";
exports.__esModule = true;
// синтетические переменные, которые подменяются в рантайме
exports.__cadesAsyncToken__ = {};
exports.__createCadesPluginObject__ = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return ({});
};
function getGeneratorConstructor() {
    return new Function('', 'return Object.getPrototypeOf(function*(){}).constructor')();
}
exports._generateCadesFn = function (callback) {
    var _a;
    var cadesplugin = window.cadesplugin;
    var cadesGeneratorsAPI = Boolean(cadesplugin.CreateObjectAsync);
    var callbackName = callback.name || 'dynamicFn';
    var callbackLiteral = String(callback);
    var callbackArguments = ((_a = callbackLiteral.match(/^function[\s\w]*?\((.*?)\)/)) === null || _a === void 0 ? void 0 : _a[1]) || '';
    var callbackBody = callbackLiteral.replace(/^.*?{([\s\S]*?)}$/, '$1');
    var crossEnvCallbackLiteral = String(new (cadesGeneratorsAPI ? getGeneratorConstructor() : Function)(callbackArguments, callbackBody));
    crossEnvCallbackLiteral = crossEnvCallbackLiteral.replace(/(?:\w+?\.)?__createCadesPluginObject__(\([\s\S]*?\))/gm, "cadesplugin.CreateObject" + (cadesGeneratorsAPI ? 'Async' : '') + "$1");
    crossEnvCallbackLiteral = crossEnvCallbackLiteral.replace(/(?:\w+?\.)?__cadesAsyncToken__\s*?\+\s*?\b/gm, cadesGeneratorsAPI ? 'yield ' : '');
    if (!cadesGeneratorsAPI) {
        crossEnvCallbackLiteral = crossEnvCallbackLiteral.replace(/propset_(.*?)\((.*?)\)/gm, '$1 = $2');
    }
    return [
        cadesGeneratorsAPI ? "cadesplugin.async_spawn(" + crossEnvCallbackLiteral + ");" : "(" + crossEnvCallbackLiteral + ")();",
        "//# sourceURL=crypto-pro_" + callbackName + ".js",
    ].join('');
};
