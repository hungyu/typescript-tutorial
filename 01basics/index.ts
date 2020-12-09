// Primitive types

/*
EXP 1
*/
let myName = 'Maxwell'; // string
let age = 20; // number
let hasPet = false; // boolean
let nothing = undefined; // any
let nothingLiterally = null; //any
let qqq; // any

age = 'test'
myName = null
hasPet = 20

// Nullable type
nothing = 'test'
nothingLiterally = 20



/*
EXP 2
*/
let test1: undefined = undefined
let test2: null = null

test1 = 20
test2 = '100'


/*
EXP 3
*/
let test3: string;
test3 = '123'

test3 = undefined


/** 
 * test 4
*/
let test4: string;

let myString = test4;

/**
 * test 5
 */
let test5: string | null = null

test5 = '1234'
test5 = null


// Object Types

/**
 * test6
 */
let info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};

info.name = 12
info.age = '123'
hasPet = undefined

/**
 * test6
 */
// name inference not any, is undefined
let info2 = {
    name: undefined,
    age: 20,
    hasPet: false,
};

info2.name = '123'

// 1 more key
info2 = {
    name: undefined,
    age: 20,
    hasPet: false,
    test: 3
}

// 1 less key
info2 = {
    name: undefined,
    age: 20
}

// try adding key
info2.newkey = 5

// delete a key
delete info2.hasPet

info2.age = undefined

/**
 * test7
 */
let nestedObject = {
    prop: 'Hello',
    child: {
      prop1: 123,
      prop2: false
    }
};

nestedObject.child.prop1 = '123'
/**
 * test8
 */
let obj1 = { hello: 'World' };
let obj2 = { ...obj1, goodbye: 'Cruel World' };

obj2.hello = 12

/**
 * test9
 */
let obj3 = { hello: 'Another World' };
let obj4 = Object.assign(obj3, { //any
  goodbye: 'Cruel World'
});




/**
Object.assign is an ECMAScript2015 feature and does not exist in ECMAScript5 and lower.
You can either target ECMAScript2015 by changing your TS compiler configuration with

target: 'es6'

or you can extend the ObjectConstructor interface with the method assign

declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}
 */


 /**
 * test 10
 */
let test10: object = { hello: 'World' }

test10.hello = '123'
test10.hello = 123

test10 = {you: true}

test10 = ['1', '2', '3']

test10 = () => {}
test10 = function() {}
test10 = '123'
test10 = undefined
test10 = 123
test10 = null
test10 = true
test10 = Symbol()


 /**
 * test 11
 */
let arrayObj = [1,2,3,4]
let functionObj = function() {
	console.log('test');
}
let stringObj = new String('123')
let promiseObj = new Promise((res) => res(123)) // change compiler version to 2015
let jobc = {test: 1}

arrayObj.customValue = '123'
functionObj.customValue = '123'
stringObj.customValue = '123'
promiseObj.customValue = '123'
arrayObj = [1,2,3,4,5,6,7]
arrayObj = {test: '123'}

arrayObj.push(4)
arrayObj.push(5)
arrayObj.pop = function() { return 123}
arrayObj.pop = function() { return '123'}

jobc = {test: 5}
jobc = {f: 2}


/**
 * Function type
 */
 /**
 * test 12
 */
const justAFunction = () => {
    console.log('123')
}
// parameters type inference are any
const funcTest2 = (num1, num2) => {
    return num1 + num2
}

const funcTest3 = (num1: any, num2: any) => {
    return num1 + num2
}

const s: string = funcTest3(100, 200); // not be checked



//Fix, type inference is number
const funcTest4 = (num1: number, num2: number) => {
    return num1 + num2
}

const sTest: string = funcTest4(123, 456)


const funcTest5 = (num1: number, num2: number): number => {
    return num1 + num2
}

const funcTest6 = (num1: number, num2: number) => {
    num1 + num2
}


 /**
 * test 13
 */
// we better to avoid using any, but in somecase we need,
// see this

// JSON.parse()


const jsonString = '{"hello": 123, "test": "no way"}';

// any
let parsed = JSON.parse(jsonString);

// type check
/**
 * The as keyword is a Type Assertion in TypeScript which tells the compiler to consider the object as another type than the type the compiler infers the object to be.
 */
let parsed1 = JSON.parse(jsonString) as {hello: number, test: string};
let parsed2: { hello:number, test:string } = JSON.parse(jsonString);
let parsed3 = <{hello: number, test: string}> JSON.parse(jsonString);

// we assign the wrong type to jsonSting, but no error
let parsed4 = JSON.parse(jsonString) as {hello: string, test: number}
parsed4 = {s: 1}


/**
 * test 14
 */

let f = function test14a() {
    return undefined
}
let f2 = function test14b():undefined {
    return undefined
}
let f3 = function test14c():undefined {

}
let f4 = function test14c():void {
    return undefined
}


/**
 * Array Types
 */
/**
 * test 15
 */
// Homogeneous Type Array
let numbers = [1, 2, 3, 4, 5];

let strings = ['hi', 'how are you', 'goodbye'];

numbers[1] = '123'
numbers[1] = 123
numbers.push('123')
numbers.push(123)
numbers.concat([123,123])
numbers.concat([123, '123'])
numbers=[1,23]
numbers =['1']

let numbers2 = [123,'123']

let objAry = [
    {abc: 1},
    {abc: 2},
    {abc: 3}
]


let objAry2 = [
    {abc: 1},
    {abc: '2'},
    {abc: 3}
]
let objAry3 = [
    {abc: 1},
    {abc:'2', def: 3},
    {abc: 3}
]

let ary1= [
    [1,2,3],
    ['1'],
    [function():any{}]
]

let ary2 = [
    [1,2,3],
    ['1'],
    [function():any{}],
    [true, '1'],
    [{}, undefined]
]

// inference any
let ary3 = []

let ary4: number[] = []
ary4.push(1)
ary4.push(null)



/**
 * Tuple
 */


let car = ['BMW', 'moto', 'sliver', new Date(2020, 2, 28)]


let car2: [string, string, string, Date] = ['BMW', 'moto', 'sliver', new Date(2020, 2, 28)];

// assuem we have 3 caa type
let car3: [string, string, string, Date] = ['BMW', 'moto', 'sliver', new Date(2020, 2, 28)];
let car4: [string, string, string, Date] = ['Toyota', 'moto', 'royal', new Date(2020, 2, 28)];
let car5: [string, string, string, Date] = ['Lambergini', 'moto', 'golen', new Date(2020, 2, 28)];

// alias type
type Vehicle = [string, string, string, Date];
let car6: Vehicle =  ['Lambergini', 'moto', 'golen', new Date(2020, 2, 28)];
let car7 = <Vehicle> ['Lambergini', 'moto', 'golen', new Date(2020, 2, 28)];
let car8 = ['Lambergini', 'moto', 'golen', new Date(2020, 2, 28)] as Vehicle;


/**
 * Enumerated Types
 */
/**
 * test 16
 */

//  no equal sign
enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Saturday
}

let day1 = Weekday.Monday
console.log(day1) // 1
console.log(Weekday[day1]) // Monday
