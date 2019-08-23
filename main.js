angular.module('myApp', []).controller('userCtrl', function($scope,$http) {
    // /$scope.employeeList = [{name:'Nitish'},{name:'Nishant'},{name:'Varun'},{name:'Ganesh'}];

    $http.get('http://localhost:3000/getEmployeeList')
    .then(function (response) {
        $scope.employeeList = response.data;
        
        document.getElementById("employyeListDiv").style.display = "block";
        
    })
    .catch(function (response) {
        console.error('Gists error', response.status, response.data);
        document.getElementById("error").style.display = "block";
    })
    .finally(function () {
        //console.log("finally finished gists");
        document.getElementById("loader").style.display = "none";
        
    });

    $scope.selectedEmployee = [];
      
    $scope.selectAll = false;

    $scope.updateCount = function(){
        $scope.peopleCount = 0;
        for(var i=0;i<$scope.employeeList.length;i++){
            if($scope.employeeList[i].checked){
                $scope.peopleCount++;
            }
        }
    }
    
      $scope.toggleAll = function() {
        for(var i=0;i<$scope.employeeList.length;i++){
            $scope.employeeList[i].checked =  $scope.selectAll;
        }
        $scope.peopleCount = $scope.employeeList.length;
        console.log($scope.selectAll);
      };
  
});