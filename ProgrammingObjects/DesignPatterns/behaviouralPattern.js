//Behavioural Patterns = identifies common communication patterns

//Obverver Pattern - subscription model in which objects subscribe to an event and get notified when the event occurs
class Car {
  constructor(gas) {
    this.gas = gas;
    this.actions = [];
  }

  setGasLevel(val) {
    this.gas = val;
    this.notifyAll();
  }

  subscribe(observer) {
    this.actions.push(observer);
  }

  unsubscribe(observer) {
    this.actions.filter(function (el) {
      return el !== observer;
    });
  }

  notifyAll() {
    return this.actions.forEach(
      function (el) {
        el.update(this);
      }.bind(this),
    );
  }
}

class Consumption {
  update(car) {
    car.gas = car.gas + 1;
  }
}

var c = new Car(1);
var co = new Consumption();
c.subscribe(co);
c.setGasLevel(11); // 12
c.unsubscribe(co);
c.setGasLevel(10); // 11

//Strategy pattern
var JSSort = function () {
  this.sort = function (data) {
    return data.sort((x, y) => parseInt(x) > parseInt(y));
  };
};

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

var BubbleSort = function () {
  this.sort = function (data) {
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length - 1 - i; j++) {
        if (data[j] > data[j + 1]) {
          swap(data, j, j + 1);
        }
      }
    }
    return data;
  };
};

var InsertionSort = function () {
  this.sort = function (data) {
    let temp;
    for (let i = 1; i < data.length; i++) {
      let j = i;
      temp = data[i];
      while (j > 0 && data[j - 1] > temp) {
        data[j] = data[j - 1];
        j--;
      }
      data[j] = temp;
    }
    return data;
  };
};

var Sorter = function () {
  this.algorithm = new JSSort();
};

Sorter.prototype = {
  setStrategy: function (algorithm) {
    this.algorithm = algorithm;
  },

  sort: function (data) {
    return this.algorithm.sort(data);
  },
};

function run() {
  var data = [1, 10, 24, 22, 11, 9, 2, 0];

  var bubble = new BubbleSort();
  var standard = new JSSort();
  var insert = new InsertionSort();

  var sorter = new Sorter();

  sorter.setStrategy(bubble);
  console.log('Bubble Sort Strategy: ' + sorter.sort(data));
  sorter.setStrategy(standard);
  console.log('JavaScript Sort Strategy: ' + sorter.sort(data));
  sorter.setStrategy(insert);
  console.log('Insertion Sort: ' + sorter.sort(data));
}
run();

//Mediator pattern
class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map((airplane) => {
      return airplane.position;
    });
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}
