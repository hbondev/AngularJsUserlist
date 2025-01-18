myApp.controller("userlistController", ['$scope', '$location', '$http', 'checkCookie', function($scope, $location, $http, checkCookie) {
    const API_URL = "/api/manage/users";
    let token = checkCookie.checkTokenCookie();
    $scope.users = [];
  
    if (token) {
      $scope.getData = function() {
        $http({
          method: 'GET',
          url: API_URL,
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }).then(function(response) {
          $scope.users = response.data.users; // Assuming response.data.users is an array of user objects
          console.log($scope.users); // Debugging
        }, function(error) {
          console.error("Error fetching user list:", error);
          $scope.error = "Failed to load user list. Please try again.";
        });
      };
  
      $scope.getData();
    } else {
      $location.path('/login');
    }
  }]);