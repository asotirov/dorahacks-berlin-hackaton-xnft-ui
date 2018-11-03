angular.module('worldMap', ['ui.bootstrap', 'ui.router', 'ngAnimate']);

angular.module('worldMap').config(function ($stateProvider) {
    $stateProvider.state('base.world-map', {
        url: '/world-map/:id1/:id2',
        templateUrl: 'modules/world-map/partial/world-map-explorer/world-map-explorer.html'
    });

    /* Add New States Above */
});

