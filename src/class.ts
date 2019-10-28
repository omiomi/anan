class Dog {
    constructor(name: string) {
        this.name = name;
    }
    name: string
    run(){}
}
console.log(Dog.prototype)
let dog = new Dog('wa wa')
console.log(dog)

//类的继承
class Husky extends Dog {
    constructor(name: string, color: string) {
        super(name)
        this.color = color
    }
    color:string
}