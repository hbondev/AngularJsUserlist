myApp.controller("loginController", ['$scope', '$location', '$http', 'checkCookie', function ($scope, $location, $http, checkCookie) {
  const API_URL = "api/user/create-session";
  $scope.password = '';
  $scope.mobile = ''; 
  $scope.alert = '';
  var token = checkCookie.checkTokenCookie(); 
  $scope.checkUser = function () {
    var context = {
      "username": $scope.mobile,
      "password": $scope.password
    };

    var req = {
      method: 'POST',
      url: API_URL,
      headers: {
        'Content-Type': "application/json"
      },
      data: context
    };

    if (token) {
      Swal.fire({
        title: "ورود موفق",
        text: "خوش آمدید",
        icon: "success",
        confirmButtonText: "بسیار خب"
      });
      $location.path('/userlist')
    } else {
      $http(req).then((res) => {
        if (res.status === 200 && res.data.status === true) {
          checkCookie.setToken(res.data.token); 
          $location.path('/users');
        } else {
          $scope.alert = "اطلاعات اشتباه درج شده است";
        }
      }, (error) => {
        console.log("Error:", error); 
        Swal.fire({
          title: "خطا",
          text: "مشکلی رخ داده است. لطفا دوباره تلاش کنید.",
          icon: "error",
          confirmButtonText: "باشه"
        });
      });
    }
  };
}]);