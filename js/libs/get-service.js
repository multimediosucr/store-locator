var endpoint = require("../base/json").jsonendpoint;
var ajax = require("./ajax").default;

var useService = (function () {
    "use strict";

    /**
     *
     * @param API_service {string}
     * @param params {object} data sent to the API
     * @param loader {Boolean} display or not the loader
     * @returns {jQuery} ajax
     */
    var init = function (API_service, params, loader) {
        if (endpoint[API_service]) {

            var options = {
                url: endpoint[API_service].url
            };
            options.method = endpoint[API_service].method;
            if (endpoint[API_service].contentType != undefined) {
                options.contentType = endpoint[API_service].contentType;
            }
            if (endpoint[API_service].processData != undefined) {
                options.processData = endpoint[API_service].processData;
            }
            options.data = params;
            return ajax(options, loader)
        }
        else {
            throw new Error(`API Service ${API_service} not defined`)
        }
    };
    return init;

})();

export default useService;