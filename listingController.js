angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.newDItem = '';
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.newDItem);
      $scope.newDItem = '';
    };

    $scope.deleteListing = function(index) {
      $scope.listing.splice(index,1);
    };

    $scope.showDetails = function(index) {
      //Needs to be implemented
    };
  }
]);