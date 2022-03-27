"use strict";
exports.__esModule = true;
var _afterPluginsLoaded_1 = require("../../helpers/_afterPluginsLoaded");
var _extractMeaningfulErrorMessage_1 = require("../../helpers/_extractMeaningfulErrorMessage");
var _generateCadesFn_1 = require("../../helpers/_generateCadesFn");
/**
 * Проверяет действительность сертификата
 *
 * @returns флаг валидности
 */
exports.isValid = _afterPluginsLoaded_1._afterPluginsLoaded(function () {
    var cadesCertificate = this._cadesCertificate;
    return eval(_generateCadesFn_1._generateCadesFn(function isValid() {
        var isValid;
        try {
            isValid = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.IsValid();
            isValid = _generateCadesFn_1.__cadesAsyncToken__ + isValid.Result;
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при проверке сертификата');
        }
        return Boolean(isValid);
    }));
});
