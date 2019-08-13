// SPDX-License-Identifier: Apache-2.0

'use strict';

var app = angular.module('application', []);

// Angular Controller
app.controller('appController', function($scope, appFactory){

	$("#success_holder").hide();
	$("#success_create").hide();
	$("#error_holder").hide();
	$("#error_query").hide();
	
	$scope.queryAllloca = function(){

		appFactory.queryAllloca(function(data){
			var array = [];
			for (var i = 0; i < data.length; i++){
				parseInt(data[i].Key);
				data[i].Record.Key = parseInt(data[i].Key);
				array.push(data[i].Record);
			}
			array.sort(function(a, b) {
			    return parseFloat(a.Key) - parseFloat(b.Key);
			});
			$scope.all_loca = array;
		});
	}

	$scope.queryloca = function(){

		var id = $scope.loca_id;

		appFactory.queryloca(id, function(data){
			$scope.query_loca = data;

			if ($scope.query_loca == "Could not locate loca"){
				console.log()
				$("#error_query").show();
			} else{
				$("#error_query").hide();
			}
		});
	}

	$scope.recordloca = function(){

		appFactory.recordloca($scope.loca, function(data){
			$scope.create_loca = data;
			$("#success_create").show();
		});
	}

	$scope.changeHolder = function(){

		appFactory.changeHolder($scope.holder, function(data){
			$scope.change_holder = data;
			if ($scope.change_holder == "Error: no loca catch found"){
				$("#error_holder").show();
				$("#success_holder").hide();
			} else{
				$("#success_holder").show();
				$("#error_holder").hide();
			}
		});
	}

});

// Angular Factory
app.factory('appFactory', function($http){
	
	var factory = {};

    factory.queryAllloca = function(callback){

    	$http.get('/get_all_loca/').success(function(output){
			callback(output)
		});
	}

	factory.queryloca = function(id, callback){
    	$http.get('/get_loca/'+id).success(function(output){
			callback(output)
		});
	}

	factory.recordloca = function(data, callback){

		data.location = data.longitude + ", "+ data.latitude;

		var loca = data.id + "-" + data.location + "-" + data.timestamp + "-" + data.holder + "-" + data.vessel;

    	$http.get('/add_loca/'+loca).success(function(output){
			callback(output)
		});
	}

	factory.changeHolder = function(data, callback){

		var holder = data.id + "-" + data.name;

    	$http.get('/change_holder/'+holder).success(function(output){
			callback(output)
		});
	}

	return factory;
});


