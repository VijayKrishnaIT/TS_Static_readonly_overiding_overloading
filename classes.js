/*
class class_one {
    //function
    dbFun(): any {
        return "mongodb data soon...";
    };
};

class class_two extends class_one {
    dbFun(): any {
        return "Cassandra db data soon..."
    };
};

//overriding the parent class with child class is function overiding.

//create object to class

console.log(new class_two().dbFun()); // Cassandra db data soon...

*/
/*
//Function Overloading

function add(arg1: number, arg2: number): number;
function add(arg1: string, arg2: string): string;
function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}
console.log(add(10, 10));               //20
console.log(add("hello1", "hello2"));   //hello1hello2
// console.log(add(10, "hello"));       //No overload matches this call.
*/
/*
function add(arg1: number, arg2: number): number;
function add(arg1: string, arg2: string): string;
function add(arg1: number, arg2: string): any;
function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}
console.log(add(10, 10));               //20
console.log(add("hello1", "hello2"));   //hello1hello2
console.log(add(10, "hello"));          // 10hello
*/
/*
class class_one {
    dbFun(arg1: any): any;
    dbFun(arg1: any): any {
        return `${arg1} data soon....`
    }
}

console.log(new class_one().dbFun("Oracle")); // Oracle data soon....
console.log(new class_one().dbFun("MongoDB")); // MongoDB data soon....

// console.log(new class_one().dbFun("hello1", "hello2")); //Expected 1 arguments, but got 2.

*/
/*

class class_one {
    static var_one: string = "Hello";
    static myFun(): string {
        return this.var_one;
    }
}

console.log(class_one.var_one, class_one.myFun()); //Hello Hello

*/
/*
class class_one {
    static var_one: string;
    constructor() {
        this.var_one = "Hello";
    }
}  //Property 'var_one' is a static member of type 'class_one'

*/
/*
class class_one {
    static var_one: string = "Hello";
};

new class_one().var_one; //Property 'var_one' is a static member of type 'class_one'

*/
/*
static class class_one {   // 'static' modifier cannot appear on a module or namespace element.
    static constructor() {  //'static' modifier cannot appear on a constructor declaration.
    }
}
*/
//readonly
/*
class class_one {
    readonly data: any;
    constructor(arg1: any) {
        this.data = arg1;
    }
}

console.log(new class_one("Hello").data);
new class_one("Hello").data = "welcome";//Cannot assign to 'data' because it is a read-only property.
*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.dbFun = function () {
        return "Hello";
    };
    class_one.myFun = function () {
        return new class_one();
    };
    return class_one;
}());
console.log(class_one.myFun().dbFun());
