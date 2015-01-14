(function () {
    'use strict';
    angular.module('mue.core.utils')
        .factory('mueGUID', function () {
            var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

            /**
             * Generates a random UUID based on the specifications from rfc4122
             * @returns {!string}
             */
            var uuid = function () {
                var chars = CHARS, uuid = [], i;
                var radix = chars.length;

                // rfc4122, version 4 form
                var r;

                // rfc4122 requires these characters
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';

                // Fill in random data.  At i==19 set the high bits of clock sequence as
                // per rfc4122, sec. 4.1.5
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random() * 16;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }

                return uuid.join('');
            };

            return {
                generate: uuid
            };
        });
})();
