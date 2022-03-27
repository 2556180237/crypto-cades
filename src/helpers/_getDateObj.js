"use strict";
exports.__esModule = true;
/**
 * Возвращает объект даты, совместимый с Cades plugin'ом, зависящий от браузера.
 *
 * В IE необходимо использовать специфичный формат "VT_DATE"
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Microsoft_Extensions/Date.getVarDate
 */
exports._getDateObj = function (dateObj) { return (dateObj.getVarDate ? dateObj.getVarDate() : dateObj); };
