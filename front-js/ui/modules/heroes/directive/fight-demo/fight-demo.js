angular.module('heroes').directive('fightDemo', function ($rootScope, gameService) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            hero1: '=',
            hero2: '=',
            control: '='
        },
        templateUrl: 'modules/heroes/directive/fight-demo/fight-demo.html',
        link: function (scope, element, attrs, fn) {
            let interval = 600;
            scope.$watch('control', (control) => {
                if (control) {
                    control.fight = () => {
                        gameService.fight(scope.hero1.id, scope.hero2.id).then((lines) => {
                            scope.lines = lines;
                            scope.lineIndex = 0;
                            setInterval(() => {
                                $rootScope.safeApply(() => scope.lineIndex++);
                            }, interval);
                        });
                    }
                }
            });
        }
    };
});
