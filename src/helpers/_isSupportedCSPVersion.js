"use strict";
exports.__esModule = true;
var oldestSupportedCSPVersion = 4.0;
exports._isSupportedCSPVersion = function (version) {
    var _a;
    version = (_a = version.match(/\d+?\b(?:\.\d+)?/)) === null || _a === void 0 ? void 0 : _a[0];
    return Number(version) >= oldestSupportedCSPVersion;
};
