"use strict";
exports.__esModule = true;
var _afterPluginsLoaded_1 = require("../../helpers/_afterPluginsLoaded");
var _extractMeaningfulErrorMessage_1 = require("../../helpers/_extractMeaningfulErrorMessage");
var _generateCadesFn_1 = require("../../helpers/_generateCadesFn");
/**
 * Возвращает ОИД'ы сертификата
 *
 * @returns список ОИД'ов
 */
exports.getExtendedKeyUsage = _afterPluginsLoaded_1._afterPluginsLoaded(function () {
    var cadesCertificate = this._cadesCertificate;
    return eval(_generateCadesFn_1._generateCadesFn(function getExtendedKeyUsage() {
        var OIDS = [];
        var count;
        try {
            count = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.ExtendedKeyUsage();
            count = _generateCadesFn_1.__cadesAsyncToken__ + count.EKUs;
            count = _generateCadesFn_1.__cadesAsyncToken__ + count.Count;
            if (count > 0) {
                while (count > 0) {
                    var cadesExtendedKeyUsage = void 0;
                    cadesExtendedKeyUsage = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.ExtendedKeyUsage();
                    cadesExtendedKeyUsage = _generateCadesFn_1.__cadesAsyncToken__ + cadesExtendedKeyUsage.EKUs;
                    cadesExtendedKeyUsage = _generateCadesFn_1.__cadesAsyncToken__ + cadesExtendedKeyUsage.Item(count);
                    cadesExtendedKeyUsage = _generateCadesFn_1.__cadesAsyncToken__ + cadesExtendedKeyUsage.OID;
                    OIDS.push(cadesExtendedKeyUsage);
                    count--;
                }
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || "Ошибка при получении ОИД'ов");
        }
        return OIDS;
    }));
});
