interface List {
    readonly id: number;
    name: string;
    [x:string]: any; // 消除sex报错
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        console.log(value.id,value.name);
    })
}

let result = {
    data: [
        {id:1,name:'A',sex:'male'},
        {id:1,name:'B'}
    ]
}
render(result)

render({
    data: [
        {id:1,name:'A',sex:'male'},
        {id:1,name:'B'}
    ]
})

interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['a', 'b']

interface Names {
    [x: string]: any;
    // y: number;
    [z: number]: number;
}

// let add: (x:number,y : number)=> number

type Add =  (x:number,y : number)=> number
let myadd :Add = (a,b )=> a+b

//混合接口
interface Lib {
    ():void;
    version:string;
    doSomething():void;
}

function getLib(){
    let lib:Lib =(()=>{}) as Lib;
    lib.version = '1.0';
    lib.doSomething();
    return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();