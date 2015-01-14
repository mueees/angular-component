(function () {
    'use strict';

    angular.module('mue.promo').config(function ($stateProvider) {
        $stateProvider
            .state('main.promo', {
                url: '/promo',
                templateUrl: 'app/scripts/pages/promo/promo.view.html',
                controller: 'PromoController'
            });
    });

})();