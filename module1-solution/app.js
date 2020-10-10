(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function() {
    var count = 0;
    var message = "";

    count = countItems($scope.items);
    if (count < 1) {
      message = "Please enter data first";
    } else if (count < 4) {
      message = "Enjoy!";
    } else {
      message = "Too much!";
    }

    $scope.message = message;
  };
}

function countItems(string) {
  var arrayOfString, count = 0;

  arrayOfString = string.split(',');
  for (var i = 0; i < arrayOfString.length; i++) {
    // Don't include empty/blank items
    if (arrayOfString[i].trim() != '') {
        count++;
    }
  }

  return count;
}

})();
