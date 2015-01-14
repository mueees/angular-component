(function () {
    'use strict';

    angular.module('mue.core.components.test').directive('mueTest', function (mueWebComponent) {
        return mueWebComponent.createUIComponent({
            name: 'mue.core.components.test',
            templateUrl: 'app/scripts/core/components/test/test.directive.view.html',
            link: function (scope) {
                console.log('this is test web component');
            }
        });
    });

})();