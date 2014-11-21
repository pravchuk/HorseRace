angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ResultsCtrl', function($scope,$http) {
	
	$scope.stopLoading = function(){
		document.getElementById('loading').style.display="none";
	}
	var dummyRob = {place : "Bangalore",
					color : "73, 143, 36",
					date : "25-01-1994",
					res : 
					[
						{
							raceName : "Chug Plate",
							raceNo : 1,
							result : 
							[
								{position : 1, horseNo : 5, name : "The Becket", jockey : "Suraj Narredu", trainer : "Padmanabhan",rating : 26},
								{position : 2, horseNo : 4, name : "Mysticle", jockey : "P.S. Chawhan", trainer : "Ganapathy",rating : 26},
								{position : 3, horseNo : 8, name : "SherLock Holmes", jockey : "Vasanth Shindey", trainer : "Padmanabhan",rating : 26},
								{position : 4, horseNo : 1, name : "Amazing", jockey : "Yash Narredu", trainer : "Padmanabhan",rating : 26},
							],
							win : "Rs.493",
							shp : "Rs.54",
							plc : "Rs.40, Rs.19, Rs.15", 
							qui : "Rs.2078",
							"for" : "Rs.13960",
							tri : "Rs.33383 C/o & 14307",
							ext : "Rs.98339 & 21072"
						}
						,
						{	
							raceName : "Pall ChampionShip",
							raceNo : 2,
							result :
							[
								{position : 1, horseNo : 5, name : "The Becket", jockey : "Suraj Narredu", trainer : "Padmanabhan",rating : 26},
								{position : 2, horseNo : 4, name : "Mysticle", jockey : "P.S. Chawhan", trainer : "Ganapathy",rating : 26},
								{position : 3, horseNo : 8, name : "SherLock Holmes", jockey : "Vasanth Shindey", trainer : "Padmanabhan",rating : 26},
								{position : 4, horseNo : 1, name : "Amazing", jockey : "Yash Narredu", trainer : "Padmanabhan",rating : 26},
							]
						}
					]};
	$scope.results = dummyRob;
	//$http.get();
	
	$http.get("http://localhost/test.php?js="+dummyRob).success(function(data){$scope.stopLoading();/*	$scope.results = "ff";*/});
	//setTimeout(5000,$scope.stopLoading);
})



.controller('ResultOpenerCtrl', function($scope) {
	var dummyRaces = [{place : "Bangalore",ClubId :"123",color : "73, 143, 36",date:"25-01-1994"},
					{place : "Mumbai",ClubId :"124",color : "204,35,17",date:"25-01-1994"},
					{place : "Mumbai",ClubId :"124",color : "204,35,17",date:"28-01-1994"},
					{place : "Bangalore",ClubId :"123",color : "73, 143, 36",date:"31-01-1994"}	
	]
	$scope.races = dummyRaces;
})

.controller('RacecardCtrl', function($scope) {
	var dummyRaceDay = {place : "Bangalore",
					color : "73, 143, 36",
					date : "25-01-1994",
					races : 
					[
						{
							raceName : "Chug Plate",
							raceNo : 1,
							card : 
							[
								{horseNo : 1, name : "The Becket", jockey : "Suraj Narredu", trainer : "Padmanabhan",rating : 26},
								{horseNo : 2, name : "Mysticle", jockey : "P.S. Chawhan", trainer : "Ganapathy",rating : 26},
								{horseNo : 3, name : "SherLock Holmes", jockey : "Vasanth Shindey", trainer : "Padmanabhan",rating : 26},
								{horseNo : 4, name : "Amazing", jockey : "Yash Narredu", trainer : "Padmanabhan",rating : 26},
							],
							
						}
						,
						{	
							raceName : "Pall ChampionShip",
							raceNo : 2,
							card :
							[
								{horseNo : 1, name : "The Becket", jockey : "Suraj Narredu", trainer : "Padmanabhan",rating : 26},
								{horseNo : 2, name : "Mysticle", jockey : "P.S. Chawhan", trainer : "Ganapathy",rating : 26},
								{horseNo : 3, name : "SherLock Holmes", jockey : "Vasanth Shindey", trainer : "Padmanabhan",rating : 26},
								{horseNo : 4, name : "Amazing", jockey : "Yash Narredu", trainer : "Padmanabhan",rating : 26},
							]
						}
					]};
	$scope.raceDay = dummyRaceDay;
})

.controller('HomeCtrl', function($scope, $location) {
})

.controller('HorseCtrl', function($scope) {
    //DEMO Jockey Data
    $scope.items = [
    {name:"A.Sandesh",
	 wins:34,
	 twos:21,
	 threes:18,
	 fours:15,
	 tot:120
	},
	{name:"Dashrath S",
	 wins:21,
	 twos:24,
	 threes:20,
	 fours:12,
	 tot:105
	},
	{name:"P.Trevor",
	 wins:19,
	 twos:11,
	 threes:16,
	 fours:8,
	 tot:86
	},
	{name:"YashNarredu",
	 wins:18,
	 twos:15,
	 threes:13,
	 fours:6,
	 tot:85
	},
	{name:"S.Zervan",
	 wins:13,
	 twos:11,
	 threes:6,
	 fours:2,
	 tot:42
	}
    ];
})

.controller('JockeysCtrl', function($scope) {

	//DEMO Jockey Data
    $scope.items = [
    {name:"A.Sandesh",
	 wins:34,
	 twos:21,
	 threes:18,
	 fours:15,
	 tot:120
	},
	{name:"Dashrath S",
	 wins:21,
	 twos:24,
	 threes:20,
	 fours:12,
	 tot:105
	},
	{name:"P.Trevor",
	 wins:19,
	 twos:11,
	 threes:16,
	 fours:8,
	 tot:86
	},
	{name:"YashNarredu",
	 wins:18,
	 twos:15,
	 threes:13,
	 fours:6,
	 tot:85
	},
	{name:"S.Zervan",
	 wins:13,
	 twos:11,
	 threes:6,
	 fours:2,
	 tot:42
	}
    ];
})

.controller('EachRaceCtrl', function($scope) {  

});
