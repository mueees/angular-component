(function () {
    'use strict';
    angular.module('mue.core.web-components').
        factory('MueUiComponentClass', function (MueCoreComponentClass) {
            var CoreUIDirective = function (name, templateUrl, template,  optScopeOptions, optLinkFn, optControllerFn, optRequire, optCompileFn) {

                var _link = function (scope, element, attrs, controllers) {
                    console.log('this is ui _linkFn');

                    ////////////////////////////////////////////////
                    // Call the developer defined link function/////
                    ////////////////////////////////////////////////
                    if (mue.util.isFunction(optLinkFn)) {
                        // Call the link functoptLinkFnion directly and pass through the controllers
                        optLinkFn(scope, element, attrs, controllers);
                    }
                };

                var _compileFn = function (element, attributes) {
                    if (mue.util.isFunction(optCompileFn)) {
                        optCompileFn(element, attributes);
                    }
                };

                MueCoreComponentClass.call(this, 'ui', true, name, templateUrl, template, optScopeOptions, _link, optControllerFn, optRequire, _compileFn);
            };
            return CoreUIDirective;
        });
})();