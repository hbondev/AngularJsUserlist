myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)  {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/createuser', {
            templateUrl: 'src/pages/createUser.html',
            controller: 'createuserController'
        })
        .when('/userlist', {
            templateUrl: 'src/pages/users.html',
            controller: 'userlistController'
        })
        .when('/users/:id', {
            templateUrl: 'src/pages/editUser.html',
            controller: 'editUserController'
        })
        .when('/login', {
            templateUrl: 'src/pages/authentication.html',
            controller: 'loginController'
        })
        .otherwise({
            redirectTo: '/login'
           


        });
}]);