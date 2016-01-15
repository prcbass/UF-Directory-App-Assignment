angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.newCode = '';
    $scope.newName = '';
    $scope.newCLat = '';
    $scope.newCLong = '';
    $scope.newAddress = '';

    $scope.detailLat = '';
    $scope.detailLong = '';
    $scope.detailAdd = '';

    $scope.wantDetails = false; //used to initially hide the detail info jumbotron


    $scope.listings = Listings;
    $scope.detailedInfo = undefined; //Did not use this variable

    $scope.addListing = function() {
      $scope.listings = $scope.listings.concat({"code":$scope.newCode,
        "name":$scope.newName, 
        "coordinates":{"latitude":$scope.newCLat,"longitude":$scope.newCLong},
        "address":$scope.newAddress});

      //reset our vars after adding the listing
      $scope.newCode = '';
      $scope.newName = '';
      $scope.newCLat = '';
      $scope.newCLong = '';
      $scope.newAddress = '';
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };

    $scope.showDetails = function(index) {
      $scope.wantDetails = true;

      //checks to see if the coordinates field exists
      if(angular.isUndefined($scope.listings[index].coordinates)){
        $scope.detailLat = "No info!";
        $scope.detailLong = "No info!";
      }
      else{
        $scope.detailLat = $scope.listings[index].coordinates.latitude;
        $scope.detailLong = $scope.listings[index].coordinates.longitude;
      }
      
      if(angular.isUndefined($scope.listings[index].address))
        $scope.detailAdd = "No info!";
      else
        $scope.detailAdd = $scope.listings[index].address
    };
  }
]);