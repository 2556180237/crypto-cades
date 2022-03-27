"use strict";
exports.__esModule = true;
var certificate_1 = require("./certificate");
var constants_1 = require("../constants");
var _afterPluginsLoaded_1 = require("../helpers/_afterPluginsLoaded");
var _extractCommonName_1 = require("../helpers/_extractCommonName");
var _extractMeaningfulErrorMessage_1 = require("../helpers/_extractMeaningfulErrorMessage");
var _generateCadesFn_1 = require("../helpers/_generateCadesFn");
var certificatesCache;
/**
 * Возвращает список сертификатов, доступных пользователю в системе
 *
 * @param resetCache = false - позволяет сбросить кэш ранее полученных сертификатов
 * @returns список сертификатов
 */
exports.getUserCertificates = _afterPluginsLoaded_1._afterPluginsLoaded(function (resetCache) {
    if (resetCache === void 0) { resetCache = false; }
    var cadesplugin = window.cadesplugin;
    if (!resetCache && certificatesCache) {
        return certificatesCache;
    }
    return eval(_generateCadesFn_1._generateCadesFn(function getUserCertificates() {
        var cadesStore;
        try {
            cadesStore = _generateCadesFn_1.__cadesAsyncToken__ + _generateCadesFn_1.__createCadesPluginObject__('CAdESCOM.Store');
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при попытке доступа к хранилищу');
        }
        try {
            void (_generateCadesFn_1.__cadesAsyncToken__ +
                cadesStore.Open(cadesplugin.CAPICOM_CURRENT_USER_STORE, cadesplugin.CAPICOM_MY_STORE, cadesplugin.CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED));
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при открытии хранилища');
        }
        var cadesCertificates;
        var cadesCertificatesCount;
        try {
            cadesCertificates = _generateCadesFn_1.__cadesAsyncToken__ + cadesStore.Certificates;
            if (cadesCertificates) {
                cadesCertificates =
                    _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificates.Find(cadesplugin.CAPICOM_CERTIFICATE_FIND_TIME_VALID);
                /**
                 * Не рассматриваются сертификаты, в которых отсутствует закрытый ключ
                 * или не действительны на данный момент
                 */
                cadesCertificates =
                    _generateCadesFn_1.__cadesAsyncToken__ +
                        cadesCertificates.Find(cadesplugin.CAPICOM_CERTIFICATE_FIND_EXTENDED_PROPERTY, constants_1.CAPICOM_PROPID_KEY_PROV_INFO);
                cadesCertificatesCount = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificates.Count;
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка получения списка сертификатов');
        }
        if (!cadesCertificatesCount) {
            throw new Error('Нет доступных сертификатов');
        }
        var certificateList = [];
        try {
            while (cadesCertificatesCount) {
                var cadesCertificate = _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificates.Item(cadesCertificatesCount);
                certificateList.push(new certificate_1.Certificate(cadesCertificate, _extractCommonName_1._extractCommonName(_generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.SubjectName), _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.IssuerName, _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.SubjectName, _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.Thumbprint, _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.ValidFromDate, _generateCadesFn_1.__cadesAsyncToken__ + cadesCertificate.ValidToDate));
                cadesCertificatesCount--;
            }
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка обработки сертификатов');
        }
        cadesStore.Close();
        certificatesCache = certificateList;
        return certificatesCache;
    }));
});
