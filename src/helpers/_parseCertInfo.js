"use strict";
exports.__esModule = true;
var constants_1 = require("../constants");
/**
 * Парсит информацию из строки с информацией о сертификате
 *
 * @param tagsTranslations - словарь с расшифровками тэгов
 * @param rawInfo - данные для парсинга
 * @returns расшифрованная информация по отдельным тэгам
 */
exports._parseCertInfo = function (tagsTranslations, rawInfo) {
    var extractedEntities = rawInfo.match(/([а-яА-Яa-zA-Z0-9\s.]+)=(?:("[^"]+?")|(.+?))(?:,|$)/g);
    if (extractedEntities) {
        return extractedEntities.map(function (group) {
            var _a, _b, _c;
            var segmentsMatch = group.trim().match(/^([а-яА-Яa-zA-Z0-9\s.]+)=(.+?),?$/);
            var title = segmentsMatch === null || segmentsMatch === void 0 ? void 0 : segmentsMatch[1];
            // Вырезаем лишние кавычки
            var description = (_b = (_a = segmentsMatch === null || segmentsMatch === void 0 ? void 0 : segmentsMatch[2]) === null || _a === void 0 ? void 0 : _a.replace(/^"(.*)"/, '$1')) === null || _b === void 0 ? void 0 : _b.replace(/"{2}/g, '"');
            var oidIdentifierMatch = title === null || title === void 0 ? void 0 : title.match(/^OID\.(.*)/);
            var oidIdentifier = oidIdentifierMatch === null || oidIdentifierMatch === void 0 ? void 0 : oidIdentifierMatch[1];
            var isTranslated = false;
            // Если нашли в тайтле ОИД, пытаемся его расшифровать
            if (oidIdentifier) {
                var oidTranslation = constants_1.OIDS_DICTIONARY[oidIdentifier];
                if (oidTranslation) {
                    title = oidTranslation;
                    isTranslated = true;
                }
            }
            var tagTranslation = (_c = tagsTranslations.find(function (tag) { return tag.possibleNames.find(function (name) { return name === title; }); })) === null || _c === void 0 ? void 0 : _c.translation;
            if (tagTranslation) {
                title = tagTranslation;
                isTranslated = true;
            }
            return { description: description, title: title, isTranslated: isTranslated };
        });
    }
};
