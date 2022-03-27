"use strict";
exports.__esModule = true;
exports._extractMeaningfulErrorMessage = function (error) {
    var _a;
    var errorContainer = ((_a = window.cadesplugin) === null || _a === void 0 ? void 0 : _a.getLastError) && window.cadesplugin.getLastError(error);
    if (!(errorContainer === null || errorContainer === void 0 ? void 0 : errorContainer.message)) {
        if (!error.message) {
            return null;
        }
        errorContainer = error;
    }
    var containsRussianLetters = /[а-яА-Я]/.test(errorContainer.message);
    if (!containsRussianLetters) {
        return null;
    }
    var searchResult = errorContainer.message.match(/^(.*?)(?:(?:\.?\s?\(?0x)|(?:\.?$))/);
    return searchResult ? searchResult[1] : null;
};
