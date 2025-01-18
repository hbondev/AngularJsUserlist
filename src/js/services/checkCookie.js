myApp.service('checkCookie', ['$cookies', '$location', function ($cookies, $location) {
    this.checkTokenCookie = function () {
        const token = $cookies.get('token');
        if (!token) {
            $location.path('/login'); 
        }
        return token;
    };
    this.setToken = function(token) {
        return $cookies.put('token', token);
    };
}]);