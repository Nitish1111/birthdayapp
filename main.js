angular.module('myApp', []).controller('userCtrl', function ($scope, $http) {
    // /$scope.employeeList = [{name:'Nitish'},{name:'Nishant'},{name:'Varun'},{name:'Ganesh'}];
    $scope.employeeListFlag = false;

    $scope.finalisedEmployees = [];
    $scope.employeeList = [];

    $scope.finaliseEmployees = function () {
        $scope.finalisedEmployees = $scope.employeeList.filter(ele => { return ele.checked });
    }

    $scope.getEmployeeList = function () {

        $http.get('http://localhost:3000/employee/getEmployeeList')
            .then(function (response) {
                $scope.employeeList = response.data;
                $scope.employeeListFlag = true;
            })
            .catch(function (response) {
                $scope.employeeList = [];
                $scope.employeeListFlag = false;
                console.error('Gists error', response.status, response.data);
            })
            .finally(function () {
                document.getElementById("loader").style.display = "none";

            });
    }


    $scope.generateUpi = function () {
        $scope.perHeadContribution = $scope.cakePrice / $scope.peopleCount;
        $scope.upiImage = "https://api.qrserver.com/v1/create-qr-code/?data=upi%3A%2F%2Fpay%3Fpa%3Dnitish.genext-1%40okhdfcbank%26pn%3Dnitish%2520kumar%26am%3D" + $scope.perHeadContribution + "%26aid%3DuGICAgICg2O-UIQ";
    }
    $scope.checkDisablity = function () {
        //console.log(!(($scope.peopleCount != undefined && $scope.peopleCount != 0) && ($scope.cakePrice != undefined && $scope.cakePrice != 0)));
        return !(($scope.peopleCount != undefined && $scope.peopleCount != 0) && ($scope.cakePrice != undefined && $scope.cakePrice != 0))

    }

    // $scope.selectedEmployee = [];

    $scope.selectAll = false;

    $scope.updateCount = function () {
        $scope.peopleCount = 0;
        for (var i = 0; i < $scope.employeeList.length; i++) {
            if ($scope.employeeList[i].checked) {
                $scope.peopleCount++;
            }
        }
        $scope.generateUpi();
    }

    $scope.toggleAll = function () {
        $scope.selectAll = !$scope.selectAll;
        for (var i = 0; i < $scope.employeeList.length; i++) {
            $scope.employeeList[i].checked = $scope.selectAll;
        }
        $scope.updateCount();
        console.log($scope.selectAll);
    };

    $scope.notifyEmployees = function () {
        alert("Emails sent");
    }

    $scope.createParty = function () {
        var date = new Date();
        $scope.partyId = ""+date.getDate()+(date.getMonth()+1)+date.getFullYear();
        var partyObj = {};
        var tempObj = [];
        partyObj.partyId = $scope.partyId;
        $scope.finalisedEmployees.forEach(
            (element) => {
                var temp = { name: element.name, emp_id: element.emp_id, paid: false };
                tempObj.push(temp);
            }
        );
        partyObj.members = tempObj;
        console.log(partyObj);
        $http.post('http://localhost:3000/party/createParty', partyObj)
            .then(function (response) {

                console.log('Success');
            })
            .catch(function (response) {

                console.log('Error');
            })
            .finally(function () {

                console.log('Completed');
            });

    }

});