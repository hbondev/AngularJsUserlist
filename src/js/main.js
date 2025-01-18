let myApp = angular.module("userlist", ['ngRoute','ngCookies']);

myApp.controller("mylistController", [
  "$scope",
  "$http", "$location",
  function ($scope, $http, $location) {
    const API_URL = "http://localhost:4001/api";

    // // Check user function
    // $scope.checkUser = async function () {
    //   // Store the mobile and password values before resetting them
    //   const mobile = $scope.mobile;
    //   const password = $scope.password;

    //   // Reset the scope variables
    //   $scope.mobile = '';
    //   $scope.password = '';

    //   // Make an HTTP request to the API
    //   $http.get(API_URL).then((res) => {
    //     const result = res.data.find((e) => {
    //       if (e.password === password && e.mobile === mobile) {
    //         $location.path("/userlist");
    //       } else {
    //         $location.path("/login");
    //       }
    //     });
    //   }, (error) => {
    //     console.log("Error fetching data:", error);
    //   });
    // };
  }
]);