"use strict";
exports.__esModule = true;
var _afterPluginsLoaded_1 = require("../../helpers/_afterPluginsLoaded");
var _extractMeaningfulErrorMessage_1 = require("../../helpers/_extractMeaningfulErrorMessage");
var _generateCadesFn_1 = require("../../helpers/_generateCadesFn");
/**
 * Возвращает информацию об алгоритме сертификата
 *
 * @returns информацию об алгоритме и его OID'е
 */
exports.getAlgorithm = _afterPluginsLoaded_1._afterPluginsLoaded(function () {
    var cadesCertificate = this._cadesCertificate;
    return eval(_generateCadesFn_1._generateCadesFn(function getAlgorithm() {
        var algorithmInfo = {
            algorithm: null,
            oid: null
        };
        var cadesPublicKey;
        try {
            cadesPublicKey = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.PublicKey();
            cadesPublicKey = _generateCadesFn_1.__cadesAsyncToken__ + cadesPublicKey.Algorithm;
            algorithmInfo.algorithm = _generateCadesFn_1.__cadesAsyncToken__ + cadesPublicKey.FriendlyName;
            algorithmInfo.oid = _generateCadesFn_1.__cadesAsyncToken__ + cadesPublicKey.Value;
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при получении алгоритма');
        }
        return algorithmInfo;
    }));
});
