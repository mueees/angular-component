(function () {
    'use strict';
    angular.module('mue.core.web-components').
        factory('MueCoreComponentClass', function (MueComponentEventDecoratorClass) {

            var namesUsed = {};

            var CoreDirective = function (type, decorateElement, name, templateUrl, template,  optScopeOptions, optLinkFn, optControllerFn, optRequire, optCompileFn) {
                mue.assert.assertStringWithLength(name);
                mue.assert.assertBoolean(templateUrl);
                mue.assert.assertBoolean(decorateElement);
                mue.assert.assert(!namesUsed[name], 'The component with name \'%s\' has already been used.', name);

                var _rxEventDecorator = new MueComponentEventDecoratorClass(name, optConsumerCommandEventOptions, optProducerEventOptions);

                namesUsed[name] = true;

                this.restrict = 'E';

                this.transclude = false;

                this.scope = {};

                if (mue.util.isObject(optScopeOptions)) {
                    this.scope = mue.util.extend({}, optScopeOptions);
                }

                this.scope = mue.util.extend(this.scope, {
                    __mueConfiguration: '=mueConfiguration' // Should never be accessed directly from the UI itself,
                    // should be transformed to scope variables that can drive UI.
                });

                if (templateUrl) {
                    this.templateUrl = template;
                } else if (mue.util.isStringWithLength(template)) {
                    this.template = template;
                }

                if (mue.util.isFunction(optControllerFn) || mue.util.isStringWithLength(optControllerFn) || mue.util.isArrayWithLength(optControllerFn)) {
                    this.controller = optControllerFn;
                }

                this.require = ['?ngModel'];

                var _userRequiresNgModel = false;

                var _linkFn = function (scope, element, attrs, controllers) {
                    console.log('this is core _linkFn');

                    var _useNgModel = mue.util.isDefinedAndNotNull(attrs.ngModel);

                    ////////////////////////////////////////////////
                    // Call the developer defined link function/////
                    ////////////////////////////////////////////////
                    if (mue.util.isFunction(optLinkFn)) {
                        // Pass the options we want to the calling design
                        var devControllers;

                        if (mue.util.isArrayWithLength(controllers)) {
                            if (_useNgModel && controllers.length > 1 && !_userRequiresNgModel) {
                                devControllers = controllers.slice(1, controllers.length);
                            } else if (!_useNgModel || _userRequiresNgModel) {
                                devControllers = controllers;
                            }
                        }

                        optLinkFn(scope, element, attrs, devControllers);
                    }
                };

                this.compile = function (element, attributes) {
                    if (mue.util.isFunction(optCompileFn)) {
                        optCompileFn(element, attributes);
                    }

                    return _linkFn;
                };
            };
            return CoreDirective;
        });
})();