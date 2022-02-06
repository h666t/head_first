// 策略模式 使算法可以互相替换
// 1. 找出应用中可能需要变化之处，独立出来
// 2. 针对接口编程，而非实现
// 3. 多用组合，少用继承

class Duck {
    constructor(){

    }
}

const muteQuack = () => {
    console.log('silence');
}

const quack = () => {
    console.log('quack quack');
}

const duckA = new Duck();
duckA.performQuack = quack;

const duckB = new Duck();
duckB.performQuack = muteQuack;

console.log("=========");
console.log(duckA.performQuack());
console.log("=========");
console.log(duckB.performQuack());




