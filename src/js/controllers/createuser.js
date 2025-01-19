myApp.controller("createuserController", ['$scope', '$location','$http','checkCookie', function($scope, $location,$http,checkCookie) {
    $scope.user = {name:'',mobile :'',email:'',pass:"",repeatpass:''}
    let API_URL ='/api/manage/users'
    let data = {};
    data = $scope.user;
       $scope.error={
        name:'لطفا نام و نام خانوادگی را بدرستی درج نمایید',
        mobile :'لطفا شماره موبایل را وارد نمایید',
        email:'لطفا ایمیل را درج نمایید',
        pass:"لطفا رمز عبور را بنویسید",
        repeatpass:"لطفا  تکرار رمز عبور را بنویسید",
        checkpass:"رمز عبور و تکرار رمز عبور باید با هم یکسان باشند",
    }
    var token = checkCookie.checkTokenCookie(); 
    

    $scope.createUser = function(){
         $http({
          method: 'POST',
          url: API_URL,
          headers: {
            'Authorization': 'Bearer ' + token
          },data
        }).then(function(response) {
          if(response.status===200){
            Swal.fire({
                title: "عملیات موفقیت آمیز",
                text: " کاربر با موفقیت ایجاد شد",
                icon: "success",
                confirmButtonText: "باشه"
              });
              $location.path('/userlist');
          }else{
            Swal.fire({
                title: "خطا در انجام عملیات",
                text: " کاربر ایجاد نشد",
                icon: "error",
                confirmButtonText: "باشه"
              });
          }
          console.log($scope.users); // Debugging
        }, function(error) {
          console.error("Error fetching user list:", error);
          $scope.error = "Failed to load user list. Please try again.";
        });
      };
    
}]);