angular.module('breed').directive('breedDemo', function ($rootScope, gameService, nftService) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            hero1: '=',
            hero2: '=',
            control: '='
        },
        templateUrl: 'modules/breed/directive/breed-demo/breed-demo.html',
        link: function (scope, element, attrs, fn) {
            scope.$watch('control', (control) => {
                if (control) {
                    control.breed = () => {
                        gameService.breed(scope.hero1.id, scope.hero2.id).then((hero) => {
                            let {health, mana, agility, stamina, criticalStrike, attackSpeed, versatility, mastery, level} = hero;
                            hero.level++;
                            scope.owner = 'AK2nJJpJr6o664CWJKi1QRXjqeic2zRp8y';
                            nftService.mintToken({
                                    owner: scope.owner,
                                    health, mana, agility, stamina, criticalStrike, attackSpeed, versatility, mastery,
                                    level: hero.level
                                })
                                .then(() => {
                                    $rootScope.safeApply(() => {
                                        scope.newHero = hero;
                                    });
                                });
                        });
                    }
                }
            });
        }
    };
});
