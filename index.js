// 策略模式 使算法可以互相替换
// 1. 找出应用中可能需要变化之处，独立出来
// 2. 针对接口编程，而非实现
// 3. 多用组合，少用继承

// class Duck {
//     constructor(){

//     }
// }

// const muteQuack = () => {
//     console.log('silence');
// }

// const quack = () => {
//     console.log('quack quack');
// }

// const duckA = new Duck();
// duckA.performQuack = quack;

// const duckB = new Duck();
// duckB.performQuack = muteQuack;

// console.log("=========");
// console.log(duckA.performQuack());
// console.log("=========");
// console.log(duckB.performQuack());


// 观察者模式 当一个对象改变状态时，通知所有依赖者
// 由一个主题类和一个观察者类组成
// 主题类可以创建、删除、通知观察者
// 观察者类有一个update来更新自己

class Subject {
    constructor(x,y){
        this.observerList = [];
        this.x = x;
        this.y = y;
    }

    addObserver(obj){
        this.observerList.push(obj);
    }

    removeObserver(obj){
        for(let i = 0; i < this.observerList.length; i++){
            if(this.observerList[i].id === obj.id){
                this.observerList.splice(i,1);
            }
        }
    }

    notifyObservers(){
        this.observerList.map((item)=>{
            item.update({x:this.x,y:this.y});
        })
    }

    setData(obj){
        this.x = obj.x;
        this.y = obj.y;
        this.notifyObservers();
    }

}

class Observer {
    constructor(id, onUpdate){
        this.id = id;
        this.onUpdate = onUpdate;
    }

    update(obj){
        this.onUpdate(obj);
    }
}

let subject1 = new Subject();
let observer1 = new Observer(1,(obj)=>{
    console.log('observer1');
    console.log(obj);
});

let observer2 = new Observer(1,(obj)=>{
    console.log('observer2');
    console.log(obj);
});

subject1.addObserver(observer1)
subject1.addObserver(observer2)

subject1.setData({x:2,y:2})
subject1.setData({x:3,y:3})
subject1.setData({x:2,y:2})