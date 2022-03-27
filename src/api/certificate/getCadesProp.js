"use strict";
exports.__esModule = true;
var _afterPluginsLoaded_1 = require("../../helpers/_afterPluginsLoaded");
var _extractMeaningfulErrorMessage_1 = require("../../helpers/_extractMeaningfulErrorMessage");
var _generateCadesFn_1 = require("../../helpers/_generateCadesFn");
/**
 * Возвращает указанное внутренее свойство у сертификата в формате Cades
 *
 * @param propName = наименование свойства
 * @returns значение запрошенного свойства
 */
exports.getCadesProp = _afterPluginsLoaded_1._afterPluginsLoaded(function (propName) {
    var cadesCertificate = this._cadesCertificate;
    return eval(_generateCadesFn_1._generateCadesFn(function getCadesProp() {
        var propertyValue;
        try {
            propertyValue = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate[propName];
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при обращении к свойству сертификата');
        }
        return propertyValue;
    }));
});
