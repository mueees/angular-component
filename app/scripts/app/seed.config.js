(function () {
    'use strict';
    angular.module('mue').config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise("/main/promo");
    });
})();