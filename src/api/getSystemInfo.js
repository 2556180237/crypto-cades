"use strict";
exports.__esModule = true;
var _afterPluginsLoaded_1 = require("../helpers/_afterPluginsLoaded");
var _extractMeaningfulErrorMessage_1 = require("../helpers/_extractMeaningfulErrorMessage");
var _generateCadesFn_1 = require("../helpers/_generateCadesFn");
/**
 * Предоставляет информацию о системе
 *
 * @returns информацию о CSP и плагине
 */
exports.getSystemInfo = _afterPluginsLoaded_1._afterPluginsLoaded(function () {
    var sysInfo = {
        cadesVersion: null,
        cspVersion: null
    };
    return eval(_generateCadesFn_1._generateCadesFn(function getSystemInfo() {
        var cadesAbout;
        try {
            cadesAbout = _generateCadesFn_1.__cadesAsyncToken__ + _generateCadesFn_1.__createCadesPluginObject__('CAdESCOM.About');
            sysInfo.cadesVersion = _generateCadesFn_1.__cadesAsyncToken__ + cadesAbout.PluginVersion;
            sysInfo.cspVersion = _generateCadesFn_1.__cadesAsyncToken__ + cadesAbout.CSPVersion();
            if (!sysInfo.cadesVersion) {
                sysInfo.cadesVersion = _generateCadesFn_1.__cadesAsyncToken__ + cadesAbout.Version;
            }
            sysInfo.cadesVersion = _generateCadesFn_1.__cadesAsyncToken__ + sysInfo.cadesVersion.toString();
            sysInfo.cspVersion = _generateCadesFn_1.__cadesAsyncToken__ + sysInfo.cspVersion.toString();
        }
        catch (error) {
            console.error(error);
            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при получении информации о системе');
        }
        return sysInfo;
    }));
});
