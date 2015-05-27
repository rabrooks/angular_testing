(function () {
    'use strict';

    // Make sure the loading module calls all new modules
    angular.module('app', [
        'app.core',
        'app.widgets',
        'app.admin',
        'app.dashboard',
        'app.people',
        'app.layout'
    ]);

})();
