angular.module("app", []).controller("actor", actor);

function actor($scope) {
	$scope.orderProp = 'name';
	$scope.lists = ["Actors", "Top"];
	$scope.actors = [{
		name : "Angelina Jolie",
		path : "http://www.imdb.com/name/nm0001401/?ref_=nv_sr_1"

	}, {

		name : "Alicia Witt",
		path : "http://www.imdb.com/name/nm0001860/?ref_=nv_sr_2"
	}, {

		name : "Adam Sandler",
		path : "http://www.imdb.com/name/nm0001191/?ref_=nv_sr_1"
	}];

}