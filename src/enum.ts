
//枚举
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest,
}

enum Message {
    Success = '恭喜你，成功了！',
    Fail= '抱歉，失败了'
}

//异构枚举
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员
// Role.Reporter = 2

enum Char {
    a,
    b = Char.a,
    c = 1+3,
    d = Math.random(),
    e = '123'.length
}

// 常量枚举 const 声明 编译时会被移除
const enum Month {
    Jan,
    Feb,
    Mar,
}

let month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型

enum E {a,b}
enum F {a = 0, b = 1}
enum G {a = 'apple',b = 'banana'}

let e: E = 3
let f: F = 3
// e === f

let e1: E.a
let e2: E.b
// e1 === e2
let e3: E.a
// e1 === e3

let g1: G
let g2: G.a