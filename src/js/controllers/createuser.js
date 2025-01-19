myApp.controller("createuserController", ['$scope', '$location', function($scope, $location) {
    $scope.user = {name:'',mobile :'',email:'',pass:"",repeatpass:''}
    $scope.error={
        name:'لطفا نام و نام خانوادگی را بدرستی درج نمایید',
        mobile :'لطفا شماره موبایل را وارد نمایید',
        email:'لطفا ایمیل را درج نمایید',
        pass:"لطفا رمز عبور را بنویسید",
        repeatpass:"لطفا  تکرار رمز عبور را بنویسید",
        checkpass:"رمز عبور و تکرار رمز عبور باید با هم یکسان باشند",
        passPattern:"/^(?=.*[a-zA-Z]).{6,}$/"
    }
}]);