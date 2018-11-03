angular.module('worldMap').controller('WorldMapExplorerCtrl', function ($scope, $rootScope, gameService, configService, $stateParams) {
    $scope.currentPosition = -1;
    $scope.engaged = false;
    $scope.fighting = false;
    var movesToEngaged = 11;
    var movesPerTurn = 3;
    $scope.imageUrl = `css/images/map-battle/${$scope.currentPosition}.jpg`;
    $scope.$watch('currentPosition', (currentPosition) => {
        $scope.imageUrl = `css/images/map-battle/${currentPosition}.jpg`;
    });
    $scope.selected = () => {
        $scope.advanceGame();
        $scope.engaged = true;
    };
    let myAddress = configService.get().myAddress;
    gameService.myTokens(myAddress).then((tokens) => {
        $scope.hero1 = _.find(tokens, {txId: $stateParams.id1});
        $scope.hero2 = _.find(tokens, {txId: $stateParams.id2});
    });
    $scope.fightControl = {};
    $scope.advanceGame = () => {
        let move = 1;
        if ($scope.engaged) {
            move = movesPerTurn;
        }
        $scope.currentPosition += move;
    };
    $scope.$watch('currentPosition', () => {
        if ($scope.currentPosition >= movesToEngaged && !$scope.fighting) {
            $scope.fighting = true;
            $scope.fightControl.fight();
        }
    });
    $scope.$watch('apiHeight', () => {
        if ($scope.apiHeight && $scope.engaged) {
            $scope.advanceGame();
        }
    });
    let interval = setInterval(() => {
        gameService.apiHeight().then((apiHeight) => {
            $rootScope.safeApply(() => {
                $scope.apiHeight = apiHeight;
            });
        })
    }, 1000);
    $scope.$on('$destroy', () => {
        clearInterval(interval);
    });
    $scope.start = () => {
        $scope.engaged = true;
        $scope.currentPosition = 0;
    }
});
