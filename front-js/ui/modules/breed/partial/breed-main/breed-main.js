angular.module('breed').controller('BreedMainCtrl',function($scope, configService){
    $scope.breedControl= {};
    $scope.myAddress = configService.get().myAddress;
});
