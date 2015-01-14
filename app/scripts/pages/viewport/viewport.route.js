(function () {
    'use strict';

    angular.module('mue.viewport').config(function ($stateProvider) {
        $stateProvider.state('main', {
            abstract: true,
            url: '/main',
            templateUrl: 'app/scripts/pages/viewport/viewport.view.html',
            controller: 'ViewportController'
        });
    });

})();