(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.toBuyItems();

  toBuy.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.boughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;
  var boughtItems = [];
  var toBuyItems = [
    { name: "Chocolate", quantity: "5"  },
    { name: "Cookies"  , quantity: "10" },
    { name: "Donuts"   , quantity: "20" },
    { name: "Milk"     , quantity: "8"  },
    { name: "Soda"     , quantity: "4"  },
    { name: "Juice"    , quantity: "3"  }
  ];

  service.boughtItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];

    boughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  };

  service.toBuyItems = function () {
    return toBuyItems;
  };

  service.boughtItems = function () {
    return boughtItems;
  };
}

})();
