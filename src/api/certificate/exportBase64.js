"use strict";
exports.__esModule = true;
var _afterPluginsLoaded_1 = require("../../helpers/_afterPluginsLoaded");
var _extractMeaningfulErrorMessage_1 = require("../../helpers/_extractMeaningfulErrorMessage");
var _generateCadesFn_1 = require("../../helpers/_generateCadesFn");
/**
 * Экспортирует сертификат в формате base64
 *
 * @returns сертификат в формате base64
 */
exports.exportBase64 = _afterPluginsLoaded_1._afterPluginsLoaded(function () {
    var cadesCertificate = this._cadesCertificate;
    return eval(_generateCadesFn_1._generateCadesFn(function exportBase64() {
        var base64;
        try {
            base64 = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.Export(0);
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при экспорте сертификата');
        }
        return base64;
    }));
});
