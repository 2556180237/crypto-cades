"use strict";
exports.__esModule = true;
exports._extractCommonName = function (subjectName) { var _a; return (_a = subjectName.match(/CN=(.+?)(?:,|$)/)) === null || _a === void 0 ? void 0 : _a[1]; };
