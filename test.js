// console.log("Hello, World!");

// const num = 42;
// console.log(num);

// const num2 = new Number(100);
// console.log(num2);

// const min = 10;
// const max = 20;

// const randomNum = Math.floor(Math.random() * (max - min) + min);
// console.log(randomNum);

// let myDate = new Date();
// console.log(myDate.toLocaleString());

// console.log(
// `${myDate.getDay()} and the ${myDate.getDate()},`
// );

// let currentDate = Date.now();
// console.log(currentDate);


function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("J");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Suraj"))
// console.log(loginUserMessage("Suraj"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Suraj",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('suraj')