angular.module('app')
    .controller('appCtrl',function($scope, $http){
        $scope.myclic=function () {
            console.log($scope.ordre);
            $http({
                method: 'POST',
                url: 'https://api.particle.io/v1/devices/250019000547363339343638/\n' +
                    'led?access_token=a548c076f3492759255aace5f42ae3dd58a880fd',
                data:{"arg":$scope.ordre}
            }).then(function successCallback(response) {
                console.log(response)
              
            }, function errorCallback(response) {
                console.log(response)
                
            });
        }
        // $scope.pwet ="coucou";
    });
