"use strict";

class Auto {
  constructor(mark) {
    this.mark = mark;
  }

  go(speed) {
    this.speed = speed;
    console.log(`Скорость ${this.mark}= ${this.speed}км/ч`);
  }

  stop() {
    this.speed = 0;
    console.log(`Скорость ${this.mark} = ${this.speed}`);
  }
}

const auto = new Auto("Peugeot");

auto.go(50);
auto.stop();

const auto2 = new Auto("Ford");

auto2.go(100);

class HeavyAuto extends Auto {
  constructor(mark, country) {
    super(mark);
    this.country = country;
    this._waterLimit = 200;
  }

  getWeaght(weaght) {
    this.weaght = weaght;
    console.log(`Вес ${this.mark} из ${this.country}= ${this.weaght}тонн`);
  }

  getCountryAuto() {
    return this.country;
  }

  setCountryAuto(country) {
    this.country = country;
  }
}

const heavyAuto = new HeavyAuto("MAN", "Беларусь");

heavyAuto.go(30);

heavyAuto.getWeaght(20);

console.log(heavyAuto.getCountryAuto());

heavyAuto.setCountryAuto("USA");
console.log(heavyAuto.getCountryAuto());
console.log(heavyAuto._waterLimit);
