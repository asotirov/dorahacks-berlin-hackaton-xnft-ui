angular.module('marketplace').factory('gameService', function ($http) {
    let baseUrl = 'http://localhost:5001/api';
    var gameService = {
        get() {
            return $http.get(`${baseUrl}/auction`).then(response => response.data).then(() => [
                    {
                        stats: {
                            health: 5790,
                            mana: 1010,
                            agility: 73,
                            stamina: 123,
                            criticalStrike: 41,
                            attackSpeed: 34,
                            versatility: 6,
                            mastery: 78,
                            gen: 0
                        },
                        "startDate": "2018-10-28 13:20:00.890000",
                        "endDate": "2018-10-29 20:40:00.890000",
                        "startPrice": 471000000000,
                        "tokenId": 12,
                        isMine: true
                    }, {
                        stats: {
                            health: 3750,
                            mana: 5000,
                            agility: 600,
                            stamina: 53,
                            criticalStrike: 13,
                            attackSpeed: 39,
                            versatility: 21,
                            mastery: 18,
                            gen: 0
                        },
                        "startDate": "2018-10-24 12:20:00.890000",
                        "endDate": "2018-10-24 20:40:00.890000",
                        "startPrice": 790900090000,
                        "tokenId": 11,
                        isMine: true
                    }, {
                        stats: {
                            health: 17390,
                            mana: 110,
                            agility: 330,
                            stamina: 26,
                            criticalStrike: 31,
                            attackSpeed: 19,
                            versatility: 41,
                            mastery: 8,
                            gen: 0
                        },
                        "startDate": "2018-10-24 11:53:00.890000",
                        "endDate": "2018-10-24 20:40:00.890000",
                        "startPrice": 6900000000,
                        "tokenId": 19,
                        "addressId": 25232
                    }, {
                        stats: {
                            health: 5141,
                            mana: 739,
                            agility: 513,
                            stamina: 23,
                            criticalStrike: 17,
                            attackSpeed: 39,
                            versatility: 61,
                            mastery: 8,
                        },
                        "startDate": "2018-10-24 11:53:00.890000",
                        "endDate": "2018-10-24 20:40:00.890000",
                        "startPrice": 6900000000,
                        "tokenId": 19,
                        "addressId": 25232
                    }, {
                        stats: {
                            health: 7901,
                            mana: 1231,
                            agility: 600,
                            stamina: 23,
                            criticalStrike: 1,
                            attackSpeed: 39,
                            versatility: 61,
                            mastery: 83,
                        },
                        "startDate": "2018-10-24 11:53:00.890000",
                        "endDate": "2018-10-24 20:40:00.890000",
                        "startPrice": 6900000000,
                        "tokenId": 21,
                        "addressId": 25232
                    }
                ]);
        },
        apiHeight() {
            return $http.get(`${baseUrl}/height`).then(response => response.data);
        },
        fight(hero1Id, hero2Id) {
            return $http.get(`${baseUrl}/battle?player1=${hero1Id}&player2=${hero2Id}`).then(response => response.data);
        },
        breed(hero1Id, hero2Id) {
            return $http.get(`${baseUrl}/breed?player1=${hero1Id}&player2=${hero2Id}`).then(response => response.data);
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
