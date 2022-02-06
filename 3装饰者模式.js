// 对修改关闭 对拓展开放
class Drinks { // 饮料类
  constructor() {
  }
  cost(){
    return 0
  }

  getDescription(){
    return ""
  }
}

class Espresso extends Drinks{
  constructor() {
    super()
  }
  cost(){
    return 100
  }

  getDescription(){
    return "Espresso"
  }
}

class CondimentDecorator extends Drinks{ // 调料类
  constructor() {
    super();
  }
}

class Mocha extends CondimentDecorator{
  constructor(drinks) {
    super()
    this.drinks = drinks
  }
  cost() {
    return this.drinks.cost() + 5
  }
  getDescription() {
    return this.drinks.getDescription() + "Mocha";
  }
}

class Whip extends CondimentDecorator{
  constructor(drinks) {
    super()
    this.drinks = drinks
  }
  cost() {
    return this.drinks.cost() + 4
  }
  getDescription() {
    return this.drinks.getDescription() + "Whip";
  }
}

let espresso = new Espresso(); // 浓缩咖啡饮料
console.log(espresso.cost())
console.log(espresso.getDescription())

let mocha = new Mocha(espresso); // 加入摩卡调料
console.log(mocha.cost())
console.log(mocha.getDescription())

let whip = new Whip(mocha); // 加入奶泡
console.log(whip.cost())
console.log(whip.getDescription())

