angular.module('marketplace').factory('gameService', function ($http) {
    let baseUrl = 'http://localhost:5001/api';
    var gameService = {
        get() {
            return $http.get(`${baseUrl}/auction`).then(response => response.data);
        },
        apiHeight() {
            return $http.get(`${baseUrl}/height`).then(response => response.data);
        },
        fight(hero1Id, hero2Id) {
            // return Promise.resolve(['Player1 attacks', 'Player2 attacks', 'Player2 Wins!']);
            return $http.get(`${baseUrl}/battle?player1=${hero1Id}&player2=${hero2Id}`).then(response => response.data);
        },
        myTokens(address) {
            let otherAddress = window.neo.getByteArrayAddress(address);
            return $http.get(`${baseUrl}/ownedTokens?address=${otherAddress.value}`)
                .catch(err => {
                    console.error(err);
                    throw err;
                })
                .then(response => response.data);
        }
    };

    return gameService;
});
