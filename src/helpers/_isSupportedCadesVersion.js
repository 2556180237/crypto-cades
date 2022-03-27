"use strict";
exports.__esModule = true;
exports._isSupportedCadesVersion = function (version) {
    var match = version.match(/(\d+)\.(\d+)\.(\d+)/);
    if (!match) {
        return false;
    }
    var major = match[1], minor = match[2], patch = match[3];
    if (Number(major) < 2) {
        return false;
    }
    if (Number(major) === 2 && Number(patch) < 12438) {
        return false;
    }
    return true;
};
