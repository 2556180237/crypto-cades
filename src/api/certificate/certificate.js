"use strict";
exports.__esModule = true;
var constants_1 = require("../../constants");
var exportBase64_1 = require("./exportBase64");
var getAlgorithm_1 = require("./getAlgorithm");
var getCadesProp_1 = require("./getCadesProp");
var getDecodedExtendedKeyUsage_1 = require("./getDecodedExtendedKeyUsage");
var getExtendedKeyUsage_1 = require("./getExtendedKeyUsage");
var getInfo_1 = require("./getInfo");
var hasExtendedKeyUsage_1 = require("./hasExtendedKeyUsage");
var isValid_1 = require("./isValid");
var Certificate = /** @class */ (function () {
    function Certificate(_cadesCertificate, name, issuerName, subjectName, thumbprint, validFrom, validTo) {
        this._cadesCertificate = _cadesCertificate;
        this.name = name;
        this.issuerName = issuerName;
        this.subjectName = subjectName;
        this.thumbprint = thumbprint;
        this.validFrom = validFrom;
        this.validTo = validTo;
    }
    Certificate.prototype.getOwnerInfo = function () {
        return getInfo_1.getInfo.call(this, constants_1.SUBJECT_TAGS_TRANSLATIONS, 'SubjectName');
    };
    Certificate.prototype.getIssuerInfo = function () {
        return getInfo_1.getInfo.call(this, constants_1.ISSUER_TAGS_TRANSLATIONS, 'IssuerName');
    };
    Certificate.prototype.getExtendedKeyUsage = function () {
        return getExtendedKeyUsage_1.getExtendedKeyUsage.call(this);
    };
    Certificate.prototype.getDecodedExtendedKeyUsage = function () {
        return getDecodedExtendedKeyUsage_1.getDecodedExtendedKeyUsage.call(this);
    };
    Certificate.prototype.getAlgorithm = function () {
        return getAlgorithm_1.getAlgorithm.call(this);
    };
    Certificate.prototype.getCadesProp = function (propName) {
        return getCadesProp_1.getCadesProp.call(this, propName);
    };
    Certificate.prototype.isValid = function () {
        return isValid_1.isValid.call(this);
    };
    Certificate.prototype.exportBase64 = function () {
        return exportBase64_1.exportBase64.call(this);
    };
    Certificate.prototype.hasExtendedKeyUsage = function (oids) {
        return hasExtendedKeyUsage_1.hasExtendedKeyUsage.call(this, oids);
    };
    return Certificate;
}());
exports.Certificate = Certificate;
