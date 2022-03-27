"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var constants_1 = require("../constants");
var _afterPluginsLoaded_1 = require("../helpers/_afterPluginsLoaded");
var _extractMeaningfulErrorMessage_1 = require("../helpers/_extractMeaningfulErrorMessage");
var _generateCadesFn_1 = require("../helpers/_generateCadesFn");
var _getCadesCert_1 = require("../helpers/_getCadesCert");
var _getDateObj_1 = require("../helpers/_getDateObj");
/**
 * Создает отсоединенную подпись хеша по отпечатку сертификата
 *
 * @param thumbprint - отпечаток сертификата
 * @param messageHash - хеш подписываемого сообщения, сгенерированный по ГОСТ Р 34.11-2012 256 бит
 * @returns подпись в формате PKCS#7
 */
exports.createDetachedSignature = _afterPluginsLoaded_1._afterPluginsLoaded(function (thumbprint, messageHash) { return __awaiter(void 0, void 0, void 0, function () {
    var cadesplugin, cadesCertificate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cadesplugin = window.cadesplugin;
                return [4 /*yield*/, _getCadesCert_1._getCadesCert(thumbprint)];
            case 1:
                cadesCertificate = _a.sent();
                return [2 /*return*/, eval(_generateCadesFn_1._generateCadesFn(function createDetachedSignature() {
                        var cadesAttrs;
                        var cadesHashedData;
                        var cadesSignedData;
                        var cadesSigner;
                        try {
                            cadesAttrs = _generateCadesFn_1.__cadesAsyncToken__ + _generateCadesFn_1.__createCadesPluginObject__('CADESCOM.CPAttribute');
                            cadesHashedData = _generateCadesFn_1.__cadesAsyncToken__ + _generateCadesFn_1.__createCadesPluginObject__('CAdESCOM.HashedData');
                            cadesSignedData = _generateCadesFn_1.__cadesAsyncToken__ + _generateCadesFn_1.__createCadesPluginObject__('CAdESCOM.CadesSignedData');
                            cadesSigner = _generateCadesFn_1.__cadesAsyncToken__ + _generateCadesFn_1.__createCadesPluginObject__('CAdESCOM.CPSigner');
                        }
                        catch (error) {
                            console.error(error);
                            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при инициализации подписи');
                        }
                        var currentTime = _getDateObj_1._getDateObj(new Date());
                        try {
                            void (_generateCadesFn_1.__cadesAsyncToken__ + cadesAttrs.propset_Name(constants_1.CADESCOM_AUTHENTICATED_ATTRIBUTE_SIGNING_TIME));
                            void (_generateCadesFn_1.__cadesAsyncToken__ + cadesAttrs.propset_Value(currentTime));
                        }
                        catch (error) {
                            console.error(error);
                            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при установке времени подписи');
                        }
                        var cadesAuthAttrs;
                        try {
                            void (_generateCadesFn_1.__cadesAsyncToken__ + cadesSigner.propset_Certificate(cadesCertificate));
                            cadesAuthAttrs = _generateCadesFn_1.__cadesAsyncToken__ + cadesSigner.AuthenticatedAttributes2;
                            void (_generateCadesFn_1.__cadesAsyncToken__ + cadesAuthAttrs.Add(cadesAttrs));
                            void (_generateCadesFn_1.__cadesAsyncToken__ + cadesSigner.propset_Options(cadesplugin.CAPICOM_CERTIFICATE_INCLUDE_WHOLE_CHAIN));
                        }
                        catch (error) {
                            console.error(error);
                            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при установке сертификата');
                        }
                        try {
                            void (_generateCadesFn_1.__cadesAsyncToken__ +
                                cadesHashedData.propset_Algorithm(cadesplugin.CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256));
                            void (_generateCadesFn_1.__cadesAsyncToken__ + cadesHashedData.SetHashValue(messageHash));
                        }
                        catch (error) {
                            console.error(error);
                            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при установке хеша');
                        }
                        var signature;
                        try {
                            signature =
                                _generateCadesFn_1.__cadesAsyncToken__ +
                                    cadesSignedData.SignHash(cadesHashedData, cadesSigner, cadesplugin.CADESCOM_PKCS7_TYPE);
                        }
                        catch (error) {
                            console.error(error);
                            throw new Error(_extractMeaningfulErrorMessage_1._extractMeaningfulErrorMessage(error) || 'Ошибка при подписании данных');
                        }
                        return signature;
                    }))];
        }
    });
}); });
