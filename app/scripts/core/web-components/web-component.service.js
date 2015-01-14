(function () {
    'use strict';
    angular.module('mue.core.web-components').
        factory('mueWebComponent', function (MueUiComponentClass) {
            return {
                createUIComponent: function (configuration) {
                    mue.assert.assertObject(configuration);
                    var isTemplateUrl = mue.util.isStringWithLength(configuration.templateUrl);
                    var template =  mue.util.isStringWithLength(configuration.templateUrl) ? configuration.templateUrl : configuration.template;
                    return new MueUiComponentClass(
                        configuration.name,
                        isTemplateUrl,
                        template,
                        configuration.scope,
                        configuration.link,
                        configuration.controller,
                        configuration.require,
                        configuration.compile
                    );
                }
            }
        });
})();