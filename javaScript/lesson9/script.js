"use strict";

function Car(color, horsesPower = 300) {
  this.color = color;
  this.isTurnOn = false;
  this.horsesPower = horsesPower;
  this.speed = 0;

  this.changeColor = function (color) {
    this.color = color;
  };

  this.upperSpeed = function () {
    this.toggleTurnOn();
    function giveSpeed() {
      console.log(this);
    }
    giveSpeed();
  };

  this.toggleTurnOn = function () {
    this.isTurnOn = !this.isTurnOn;
  };
}

// car.changeColor("Красный");

// alert(car.color);

// car.toggleTurnOn();

// const car2 = car;

// car2.toggleTurnOn();

// alert(car2.isTurnOn);

// alert(car.speed);

// car.upperSpeed();
// alert(car.speed);

const redCar = new Car("Красный");

const whiteCar = new Car("Белый", 200);

console.log(redCar);
console.log(whiteCar);
