myApp.controller("editUserController", ['$scope', '$routeParams', '$http', '$location', 'checkCookie', function($scope, $routeParams, $http, $location,  checkCookie) {
  const API_URL = "/api/manage/users/" + $routeParams.id;
  let token = checkCookie.checkTokenCookie();
  $scope.model = {name:"",mobile:"",email:""};

  if (token) {

    if (!$scope.user) {
      $http({
        method: 'GET',
        url: API_URL,
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).then(function(response) {
      
        $scope.model.name = response.data.user.name ;
        $scope.model.mobile =response.data.user.mobile ;
        $scope.model.email =response.data.user.email  ;

      
      }, function(error) {
        console.error("Error fetching user details:", error);
        $scope.error = "Failed to load user details. Please try again.";
      });
    }

    $scope.updateUser = function() {
      $http({
        method: 'PUT',
        url: API_URL,
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        data: $scope.model
      }).then(function(response) {
        if(response.status === 200){
          Swal.fire({
            title: "عملیات موفقیت آمیز",
            text: "ویرایش کاربر با موفقیت انجام شد",
            icon: "success",
            confirmButtonText: "باشه"
          });
          $location.path('/userlist');

        }else{
          Swal.fire({
            title: "خطا",
            text: "مشکلی رخ داده است. لطفا دوباره تلاش کنید.",
            icon: "error",
            confirmButtonText: "باشه"
          });
        }
      
        $location.path('/users');
      }, function(error) {
        console.error("Error updating user:", error);
        $scope.error = "Failed to update user. Please try again.";
      });
    };
  } else {
    $location.path('/login');
  }
}]);