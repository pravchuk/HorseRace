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

.controller('ResultsCtrl', function($scope) {
	var dummyRob = [
						{
							raceName : "Chug Plate",
							raceNo : 1,
							result : 
							[
								{position : 1, horseNo : 5, name : "The Becket", jockey : "Suraj Narredu", trainer : "Padmanabhan",rating : 26},
								{position : 2, horseNo : 4, name : "Mysticle", jockey : "P.S. Chawhan", trainer : "Ganapathy",rating : 26},
								{position : 3, horseNo : 8, name : "SherLock Holmes", jockey : "Vasanth Shindey", trainer : "Padmanabhan",rating : 26},
								{position : 4, horseNo : 1, name : "Amazing", jockey : "Yash Narredu", trainer : "Padmanabhan",rating : 26},
							]
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
					]
	$scope.results = dummyRob;
	
})

.controller('HomeCtrl', function($scope) {
});
