myApp.service('checkCookie', ['$cookies', function ($cookies) {
    this.checkTokenCookie = function () {
        return $cookies.get('token');
    };
    this.setToken = function(token){
        return $cookies.set('token',token);
    }
}]);