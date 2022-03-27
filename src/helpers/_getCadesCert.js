"use strict";
exports.__esModule = true;
var _afterPluginsLoaded_1 = require("./_afterPluginsLoaded");
var _extractMeaningfulErrorMessage_1 = require("./_extractMeaningfulErrorMessage");
var _generateCadesFn_1 = require("./_generateCadesFn");
/**
 * Возвращает сертификат в формате Cades по отпечатку
 *
 * @param thumbprint - отпечаток сертификата
 * @returns сертификат в формате Cades
 */
exports._getCadesCert = _afterPluginsLoaded_1._afterPluginsLoaded(function (thumbprint) {
    var cadesplugin = window.cadesplugin;
    return eval(_generateCadesFn_1._generateCadesFn(function _getCadesCert() {
        var cadesStore;
        try {
            cadesStore = _generateCadesFn_1.__cadesAsyncToken__ + _generateCadesFn_1.__createCadesPluginObject__('CAdESCOM.Store');
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при попытке доступа к хранилищу');
        }
        if (!cadesStore) {
            throw new Error('Не удалось получить доступ к хранилищу сертификатов');
        }
        try {
            void (_generateCadesFn_1.__cadesAsyncToken__ +
                cadesStore.Open(cadesplugin.CAPICOM_CURRENT_USER_STORE, cadesplugin.CAPICOM_MY_STORE, cadesplugin.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED));
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при открытии хранилища');
        }
        var cadesCertificateList;
        var certificatesCount;
        try {
            cadesCertificateList = _generateCadesFn_1.__cadesAsyncToken__ + cadesStore.Certificates;
            certificatesCount = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificateList.Count;
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка получения списка сертификатов');
        }
        if (!certificatesCount) {
            throw new Error('Нет доступных сертификатов');
        }
        var cadesCertificate;
        try {
            cadesCertificateList =
                _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificateList.Find(cadesplugin.CAPICOM_CERTIFICATE_FIND_SHA1_HASH, thumbprint);
            var count = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificateList.Count;
            if (!count) {
                throw new Error("\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u0441 \u043E\u0442\u043F\u0435\u0447\u0430\u0442\u043A\u043E\u043C: \"" + thumbprint + "\" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D");
            }
            cadesCertificate = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificateList.Item(1);
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при получении сертификата');
        }
        cadesStore.Close();
        return cadesCertificate;
    }));
});
