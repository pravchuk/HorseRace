angular.module('starter.services', [	])

/**
 * A simple example service that returns some data.
 */
.factory('Context', function() {
	
	var Context = {};
	
	return {
	set: function(param,value)
	{
		Context[param] = value;
	},
    all: function(query) {
		
      return getQueryParams(query);
    },
    get: function(pname) {
      // Simple index lookup
	  
      return Context[pname];
    }
  }
})

.factory('dummy', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var dummyRaces = [{id:0,place : "Bangalore",ClubId :"123",color : "73, 143, 36",date:"25-01-1994"},
					{id:0,place : "Mumbai",ClubId :"124",color : "204,35,17",date:"25-01-1994"},
					{id:0,place : "Mumbai",ClubId :"124",color : "204,35,17",date:"28-01-1994"},
					{id:0,place : "Bangalore",ClubId :"123",color : "73, 143, 36",date:"31-01-1994"}	
	]
	
	var dummyOdds = [
		{ horseNo : 1, win : 14, shp : 25, plc : 11},
		{ horseNo : 2, win : 25, shp : 14, plc : 18},
	];
	
	var dummyTrack = [
		{ date : "25/04", horses : [{name : "Pallal",jockey:"rash"},{name : "Pallal",jockey:"rash"},{name : "Pallal",jockey:"rash"}], ground : "OS", length : "1000m", result :  "1.01(+1)"},
		{ date : "25/04", horses : [{name : "Pallal",jockey:"rash"},{name : "Pallal",jockey:"rash"},{name : "Pallal",jockey:"rash"}], ground : "OS", length : "1000m", result :  "1.01(+1)"},
		
	];
	
	var dummyRaceDays = {
				"bng21012014" :{
					place : "Bangalore",
					color : "73, 143, 36",
					date : "25-01-1994",
					
					races : 
					[
						{
							raceName : "Chug Plate",
							raceNo : 1,
							time : "9:00",
							odds : dummyOdds,
							track : dummyTrack,
							card : 
							[
								{horseNo : 1, name : "The Becket", jockey : "Suraj Narredu", trainer : "Padmanabhan",weight : 26,"rating" : "IV","prevClass" : "IV",prevWeight : 56,pedigree:"YourMom, YourDad"},
								{horseNo : 2, name : "Mysticle", jockey : "P.S. Chawhan", trainer : "Ganapathy",weight : 26,"rating" : "III","prevClass" : "IV",prevWeight : 56},
								{horseNo : 3, name : "SherLock Holmes", jockey : "Vasanth Shindey", trainer : "Padmanabhan",weight : 26,"rating" : "V","prevClass" : "IV",prevWeight : 56},
								{horseNo : 4, name : "Amazing", jockey : "Yash Narredu", trainer : "Padmanabhan",weight : 26,"rating" : "VI","prevClass" : "IV",prevWeight : 56},
							],
							
						}
						,
						{	
							raceName : "Pall ChampionShip",
							raceNo : 2,
							time : "10:00",
							card :
							[
								{horseNo : 1, name : "The Becket", jockey : "Suraj Narredu", trainer : "Padmanabhan",weight : 26,"class" : "IV","prevClass" : "IV",prevWeight : 56},
								{horseNo : 2, name : "Mysticle", jockey : "P.S. Chawhan", trainer : "Ganapathy",weight : 26,"class" : "IV","prevClass" : "IV",prevWeight : 56},
								{horseNo : 3, name : "SherLock Holmes", jockey : "Vasanth Shindey", trainer : "Padmanabhan",weight : 26,"class" : "IV","prevClass" : "IV",prevWeight : 56},
								{horseNo : 4, name : "Amazing", jockey : "Yash Narredu", trainer : "Padmanabhan",weight : 26,"class" : "IV","prevClass" : "IV",prevWeight : 56},
							]
						}
					]},
	
			"mum21012014" : {
				place : "Mumbai",
					color : "239,78,58",
					date : "25-01-1994",
					
					races : 
					[
						{
							raceName : "Chug Plate",
							raceNo : 1,
							time : "9:00",
							odds : dummyOdds,
							track : dummyTrack,
							card : 
							[
								{horseNo : 1, name : "The Becket", jockey : "Suraj Narredu", trainer : "Padmanabhan",weight : 26,"class" : "IV","prevClass" : "IV",prevWeight : 56,pedigree:"YourMom, YourDad"},
								{horseNo : 2, name : "Mysticle", jockey : "P.S. Chawhan", trainer : "Ganapathy",weight : 26,"class" : "III","prevClass" : "IV",prevWeight : 56},
								{horseNo : 3, name : "SherLock Holmes", jockey : "Vasanth Shindey", trainer : "Padmanabhan",weight : 26,"class" : "V","prevClass" : "IV",prevWeight : 56},
								{horseNo : 4, name : "Amazing", jockey : "Yash Narredu", trainer : "Padmanabhan",weight : 26,"class" : "VI","prevClass" : "IV",prevWeight : 56},
							],
							
						}
						,
						{	
							raceName : "Pall ChampionShip",
							raceNo : 2,
							time : "10:00",
							card :
							[
								{horseNo : 1, name : "The Becket", jockey : "Suraj Narredu", trainer : "Padmanabhan",weight : 26,"class" : "IV","prevClass" : "IV",prevWeight : 56},
								{horseNo : 2, name : "Mysticle", jockey : "P.S. Chawhan", trainer : "Ganapathy",weight : 26,"class" : "IV","prevClass" : "IV",prevWeight : 56},
								{horseNo : 3, name : "SherLock Holmes", jockey : "Vasanth Shindey", trainer : "Padmanabhan",weight : 26,"class" : "IV","prevClass" : "IV",prevWeight : 56},
								{horseNo : 4, name : "Amazing", jockey : "Yash Narredu", trainer : "Padmanabhan",weight : 26,"class" : "IV","prevClass" : "IV",prevWeight : 56},
							]
						}
					]}
	};
	

  return {
    all: function() {
      return friends;
    },
    get: function(raceId) {
      // Simple index lookup
      return dummyRaceDays[raceId];
    }
  }
});
