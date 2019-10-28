// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = 'abc'

//数组
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]

// 元组
let tuple: [number, string] = [1,'a']

//函数
let add = (x: number,y: number) => x + y

//对象
let obj : {x : number, y : number} = {x: 1, y: 2}
obj.x = 3

//symbol symbol
let s1: symbol = Symbol()

//undefined null 
let un: undefined = undefined
let nu: null = null

//void 
let noReturn = () => {}

// any 兼容ES6 尽量少用
let x
x = 123
x = 'abc'

// nerver 永远没有返回值的类型
let error = () => {
    throw new Error('error')
}
let endless = () =>{
    while (true) {}
}
