// We can break this into blocks, using {    } - this allows the same variable names to be used in different scopes/blocks

// semicolons are not required
'use strict';
{
    const taxRate = 0.2;

    let stockPrice = 52.3;

    // stockPrice = 65.2 - this method creates a global scope variable (without let)
    // 'use strict' prevents these globals from being used
    // node --use-strict will enforce this without it being in the code file

    let count = 20;

    function computeTax(price, count) {
        return price * count * taxRate;
    }

    console.log(computeTax(stockPrice, count));
}

{
    // A string holding the characters 10
    let x1 = '10';

    let y1 = 5.2;

    // To sum them up, convert x to int
    let result = parseInt(x1) + y1;
    console.log(result);

    result = x1 + y1;
    // What is the result if we don't convert x to a number?
    console.log(result);

    result = y1 + x1;
    // What is the result if we switch the order of y and x?
    console.log(result);
}

{
    // A string holding the characters 10
    let x = '10';

    let y = 5.2;

    // To sum them up, convert x to int
    let result = parseInt(x) + y;
    console.log(result);

    result = x+ y;
    // What is the result if we don't convert x to a number?
    console.log(result);

    result = y + x;
    // What is the result if we switch the order of y and x?
    console.log(result);
}

{
    // A string holding the characters 10
    let x = '10';

    let y = 5.2;

    // To sum them up, convert x to int
    let res = parseInt(x) + y;
    console.log(res);

    res = x + y;
    // What is the result if we don't convert x to a number?
    console.log(res);

    res = y + x;
    // What is the result if we switch the order of y and x?
    console.log(res);

    // Objects
    // This is an object with 3 properties - setup like a Python Dictionary
    let s1 = {company: 'Splunk', symbol: 'SPLK', price: '137.55'};

    console.log(s1);

    // we can modify the value of a property
    s1.price = '124.2';

    console.log(`s1.price = ${s1.price}`);

    // we can add properties to an object
    s1.stockMarket = 'Nasdaq';

    // we can delete properties from an object using the delete operator
    delete s1.symbol;
    console.log(s1);

    // accessing a non-existent property returns the special value "undefined"
    console.log(s1.symbol);

    // a const variable of a type object
    const s2 = {company: 'Microsoft', symbol: 'MSFT', price: '232.04'};

    // we can modify the value of a property of a const object, as well as add and delete properties
    s2.price = '235.2';
    console.log(s2);

    // we can get the keys of the objects (the properties) by using Object.keys()
    console.log(`Object.keys(s2) ${Object.keys(s2)}`);
    console.log(Object.keys(s2))

    // However, you cannot assign a different object set entirely to it
    //s2 = {company: 'Oracle', symbol: 'ORCL', price: '67.0 8'};

    // arrays in javascript - they are objects
    // an array with 5 elements
    const symbols = ['MSFT', 'ORCL', 'TDC', 'SPLK', 'SNOW'];
    console.log(symbols);

    // we can access the elements using an index
    console.log(symbols[0]);
    // or a string index
    console.log(symbols['0']);

    // there is no requirement for elements of the array to all be the same type
    symbols[5] = 23.2;
    console.log(symbols);

    // you can add objects to arrays
    symbols[6] = s1;
    symbols[7] = s2;
    console.log(symbols);

    // we can delete from an array by index
    delete symbols[5];
    console.log(symbols[5]);
    console.log(symbols);

    //to check if an object is an array
    console.log(Array.isArray(symbols));

    // Arrays also have a length method
    console.log(symbols.length);

    // there are also push (to add to the end) and pop (to remove) elements to the array
    symbols.push("This is the end");
    console.log(symbols)
    symbols.push("Now this is the end");
    console.log(symbols);
    symbols.pop();
    console.log(symbols);

    // arrays also have an "includes" method
    console.log(symbols.includes('SUN'));

    // JSON

    const companyOneAsJSON = JSON.stringify(s2);
    console.log(companyOneAsJSON);

    const companyOneAsObject = JSON.parse(companyOneAsJSON);
    console.log(companyOneAsObject);

    // Exercise
    function hasProperty(toCheck, value) {
        return Object.keys(toCheck).includes(value);
    }

    console.log(hasProperty(s2, 'Microsoft'))

    //JS has a "typeOf" operator to determine what an object / variable is
    console.log(typeof(s2))
}

// Exercise
{
    const v1 = 42;
    const v2 = 42.19;
    const v3 = true;
    const v4 = 'Hello';
    const v5 = null;
    const v6 = undefined;
    const v7 = { company: 'Microsoft', symbol: 'MSFT', price: 232.04 };
    const v8 = ['MSFT', 'ORCL', 'TDC', 'SPLK', 'SNOW'];
    const v9 = [232.04, 67.08, 44.98, 137.55, 235.8];
    const v10 = JSON.stringify(v9);
    const v11 = JSON.parse(v10);

    function getTheType(item) {
        //return typeof(item);
        console.log(typeof(item))
    }

    getTheType(v1);
    getTheType(v2);
    getTheType(v3);
    getTheType(v4);
    getTheType(v5);
    getTheType(v6);
    getTheType(v7);
    getTheType(v8);
    getTheType(v9);
    getTheType(v10);
    getTheType(v11);
}

//conditionals and loops
{
    // conditionals
    // Javascript will convert Non-Boolean values to Boolean as needed, conditions need to produce a True or False
    if('0') {console.log('The string 0 evaluates to True')}
    if(!0) {console.log('The number (!)0 evaluates to false')}
    if(!NaN) {console.log('(!)NaN evaluates to false')}

    // equality operators
    // Strict equality operators === and !==
    if (42 === 42.01) {console.log("42 is exactly equal 42.0")} else {console.log("42 does not equal 42.01")}
    // Loose equality operators - == and !=
    if (42 == '42'){console.log("42 is close enough to '42' that they are equal")}
    // always use the strict equality operators
    // the loose equality operators do automatic type conversion which we may not want
    // cast a string to compare to an integer and vice versa
    if (42 === parseInt('42')) {console.log("42 === parseInt('42')")}

    // Javascript also has a switch statement
    let numberList = [1,2,3,4,5,6]

    function displayNumbers(numbers){
        switch(parseInt(numbers)) {
            case 1:
                console.log('This is number 1');
                break;
            case 2:
                console.log('This is number 2');
                break;
            case 3:
                console.log('This is number 3');
                break;
            case 4:
                console.log('This is number 4');
                break;
            case 5:
                console.log('This is number 5');
                break;
            case 6:
                console.log('This is number 6');
                break;
            default:
                console.log(`function was passed the value ${numbers}`)
        }
    }

    for (let number in numberList) {
        displayNumbers(numberList[number]);
    }

    // There is also a conditional (or ternary) operator
    // condition ? expression1 : expression2  if ? then : else
    let max = numberList[0] > numberList[5] ? console.log(`Numberlist[0]: ${numberList[0]} > Numberlist[5]: ${numberList[5]}`)
        : console.log(`Numberlist[0]: ${numberList[0]} < Numberlist[5]: ${numberList[5]}`)
    // loops
    // for loops, structured like other languages except Python
    for(let count = 0; count < 5; count++) {
        console.log(`for loop execution #${count}`);
    }

    // for of loops - foreach, or for in Python
    const s1 = [1,2,3,4,5];
    for(let item of s1) {
        console.log(`Current item of s1 is ${item}`);
    }

    let someText = "This is some text I put in";
    for(const letter of someText) {
        console.log(`This is the output of the for of over someText using const instead of let: ${letter}`);
    }

    // for in loops - way to loop through objects (like a for loop over a Python dictionary)
    const rosterAndGrade = {'Pancho': 7, 'IPlayInDirt': 7, 'MegaMind': 7, 'Gracie': 6, 'Hitchner needs a nickname': 6, 'Jaws': 6}
    for (const key in rosterAndGrade) {
        console.log(`Player Name: ${key}, Player Age: ${rosterAndGrade[key]}`);
    } // Keys may not show up in the order that they were entered in the Object

    // there are also While and Do while loops although the video doesn't go over them
    let count = 0;
    while (count <= 10) {
        console.log(`Count is currently = ${count} in the While loop`);
        count++;
    }

    do {
        console.log(`Count is currently = ${count} in the Do While loop`);
        count--;
    } while (count >= 0);
    console.log(`The final value of count is ${count}`);
    }

// Functions and functional programming
{
    // Javascript functions are first class values meaning:
    // we can assign functions to variables
    // define functions that receive other functions as arguments
    // define functions that return other functions

    // Higher order Functions - functions that take a function as an argument
    /**
     * Apply the function f on each element of the array arrayIn
     * and return an array with the result
     * @param {function} f - A function that takes one argument and returns a value
     * @param {array} arrayIn
     * @return an array
     */
    function ourMap(f, arrayIn) {
        const arrayOut = [];
        for (let i = 0; i < arrayIn.length; i++) {
            arrayOut[i] = f(arrayIn[i]);
        }
        return arrayOut;
    }

    function square(num) {
        return num * num;
    }

    const numbers = [2, 4, 6, 8, 10];

    const result = ourMap(square, numbers)  // don't forget to pass the function name dumbass
    console.log(result);

    // JS has a built-in function to work with arrays in this way
    const result2 = numbers.map(square);
    console.log(result2);

    // Exercise
    {
        /**
         * Function to take an array in, send it to another function to check if the number is divisible by 3
         * and if so, add it to the result array
         * @type {number[]}
         * @param {function} f Name of the function we are sending out to the do the work
         * @param {array} arrayToCheck Array containing the values that we are testing
         * #return {array}
         */
        function divideByThree(f, arrayToCheck) {
            const numsDivisibleByThree = []
            for (let i = 0; i < arrayToCheck.length; i++) {
                numsDivisibleByThree[i] = f(arrayToCheck[i]);
            }
            return numsDivisibleByThree
        }

        function divisibleByThree(num) {
            if (num % 3 === 0) {
                return num;
            }

        }

        const numberSet = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const exerciseResult = divideByThree(divisibleByThree, numberSet);
        console.log(`My functions come up with: ${exerciseResult}`);
        const exerciseResult1 = numberSet.filter(divisibleByThree, numberSet);
        console.log(`Javascript's filter function comes up with ${exerciseResult1}`);
    }
    // Exploration Solution to the above = works better
    {
        /**
         * Apply the function p on each element of the array arrayIn
         * and return an array with those elements for which p returns true
         * @param {function} A function that takes one argument and returns a boolean
         * @param {array}
         * @return An array
         */

        function myFilter(p, arrayIn) {
            const arrayOut = [];
            let j = 0;
            for (let i = 0; i < arrayIn.length; i++) {
                if (p(arrayIn[i])) {
                    arrayOut[j] = arrayIn[i];
                    j++;
                }
            }
            return arrayOut;
        }

        const numbers = [23, 44, 15, 18];
        console.log(numbers);

        /**
         * Return true if argument is even, false if it is odd
         */
        function isEven(x) {
            return x % 2 === 0;
        }

        const result = myFilter(isEven, numbers);
        // result should contain [44, 18]
        console.log(result);
    }

    // Function Expressions
    {
        // Video uses the myFilter solution from the exercise above with some changes
        function myFilter2(p, arrayIn) {
            const arrayOut = [];
            for (const elem of arrayIn) {
                if (p(elem)) {
                    arrayOut.push(elem);
                }
            }
            return arrayOut;
        }

        const numbers = [23, 44, 15, 18];
        console.log(numbers);

        /**
         * Return true if argument is even, false if it is odd
         */
        function isEven2(x) {
            return x % 2 === 0;
        }

        let result = myFilter2(isEven2, numbers);
        // result should contain [44, 18]
        console.log(result);

        // Anonymous function expression
        // declared like a normal function, except it doesn't have a name
        result = myFilter2(function (x) {return x % 2 === 0;}, numbers);
        console.log(result);

        // declaring anonymous functions with the arrow function syntax
        result = myFilter2((x) => {return x % 2 === 0;}, numbers); // no function keyword
        console.log(result);
        // or scaled down
        result = myFilter2((x) => x % 2 === 0, numbers); // no {} and no return
        console.log(result);
        // or scaled all the way down
        result = myFilter2(x => x % 2 === 0, numbers); // no {}, return or () around the x
        console.log(result);

        // We can even assign functions to variables and pass and use them
        const isEven = (x => x % 2 === 0)
        result = myFilter2(isEven, numbers)
        console.log(result);
    }

    // Closure
    {
        let x = 5;

        /**
         * The function isDivisibleBy returns a closure
         * @returns A closure
         */
        function isDivisibleBy() {
            /**
             * isDivisibleByX takes one parameter.  However, its code uses the variable x
             * which is neither a parameter nor a local variable.  Hence it is a closure.
             * @param {number} z
             * @returns
             */
            function isDivisibleByX(z) {  // this function is a closure
                return z % x === 0;  // x is what is known as a free variable, binds to the outer x declaration
            }
            return isDivisibleByX;
        }

        // assign isDivisibleByX to a variable
        const f = isDivisibleBy();

        // the value of x is 5, so x in isDivisbleByX is also 5
        console.log(f(10));
        console.log(f(14));

        // if the value of the coptured / free variable changes, it changes for the closure as well
        x = 7;
        console.log(f(10));
        console.log(f(14));


        /**
         * Returns a closure which is a counter incremented on each call
         * @returns A closure
         */
        function createCounter() {
            let count = 0;
            return function counter() {
                // The function counter is a closure since count is a free variable
                ++count;
                return count;
            }
        }

        // Calling createCounter creates a new counter() function with the value of count set to 1
        let counter1 = createCounter();
        console.log(counter1());
        // Every time counter1 is called, the count is incremented
        // but the variable count is not accessible anywhere other than within the closure
        // This closure "information hiding" is the early way of implementing a class structure
        console.log(counter1());
        console.log(counter1());
        console.log(counter1());
    }

    // Closures (cont) and Default parameters
    {
        /**
         * Returns a closure which is a counter incremented on each call
         * @param {number} initvalue defaults to 0
         * @returns A closure
         */
        function createCounter(initValue = 0) {
            let count = initValue;
            // createCounter returns a closure which has been defined by using the arrow syntax
            return () => { count++; return count;}
        }

         // createCounter called with an initial value of 14
        // count will be incremented from a starting point of 14
        let counter2 = createCounter(14);
        // this can also be done with the default initValue of 0
        let counter3 = createCounter();
        console.log(counter2());
        console.log(counter3());
        console.log(counter2());
        console.log(counter3());
        console.log(counter2());
        console.log(counter3());
        console.log(counter2());
        console.log(counter3());
    }

    // Exceptions (no video for this
    {
        // try {
        //     //code block
        // } catch (err) {
        //     // handle exception
        // }
        const jsonFile = 'some file';

        try {
            let fileName = JSON.parse(jsonFile);
            console.log(fileName)
        } catch (err) {
            console.log(`You have either entered an invalid file/filename "${jsonFile}", or the file does not exist`);
        }

        // can catch specific types of errors
        try {
            fileName = JSON.parse(jsonFile);
            console.log(fileName);
        } catch (err) {
            // if (err instanceof SyntaxError) {
            //     console.log("You have created a syntax error")
            // }
            console.log(err)
        }
    }

    // Object Oriented Programming
    {
        // Early Javascript created "classes" through Prototype Based Objects
        // Modern Javascript supports modern classes thankfully
        // class <classname>
        // A class can have at most one constructor, if no constructor is declared, an empty one is created
        // The constructor is to be named, get this, constructor

        /**
         * Class Stock
         */
        class Stock {
            // Static field and method added in the Setters and Getters section
            // A static field
            static DISCOUNT_PCT = 3.5;

            // A static method
            static discountedPrice(price) {
                return price * (100 - Stock.DISCOUNT_PCT) / 100;
            }

            /**
             *
             * @param {string} company
             * @param {string} symbol
             * @param {number} price
             * @param {number} discountPct  // added in the Setters and Getters section
             */
            constructor(company, symbol, price, discountPct) {
                this.company = company;
                this.symbol = symbol;
                this.price = price;
                this.discountPct = discountPct;
            }

            /**
             * This is a getter for the Companies discounted stock price
             * @returns {number}
             */
            get discountedPrice() {     // added in the Setters and Getters section
                return this.price * (100 - this.discountPct) / 100;
            }

            /**
             *
             * @param {number} count
             * @returns The total price of buying "count" stocks of this company
             */
            totalPrice(count) {
                return this.price * count;
            }
        }

        // discountPct added in the Setters and Getters section
        let company1 = new Stock('Splunk', 'SPLK', 137.55, 2.5);
        let company2 = new Stock('Microsoft', 'MSFT', 237.04, 1.5);

        console.log(company1)
        console.log(`The value of 10 shares of ${company1.company} stock is ${company1.totalPrice(10)}`);
        console.log(`The discounted price of ${company1.company} stock is: ${company1.discountedPrice}`);
        console.log(`The static (default) discounted price of ${company1.company} stock is: ${Stock.discountedPrice(company1.price)}`);
        console.log(company2)
        console.log(`The value of 5 shares of ${company2.company} stock is ${company2.totalPrice(10)}`);
        console.log(`The discounted price of ${company2.company} stock is: ${company2.discountedPrice}`);
        console.log(`The static (default) discounted price of ${company2.company} stock is: ${Stock.discountedPrice(company2.price)}`);

        // Setters and Getters - this section makes additions to the Stock class
        // Getter - keyword get and takes no parameters
        // Setter - keyword set and takes one parameter
        // Getters and Setters are called like properties (no () ) but they are methods(funtions)
        // Classes also make use of static methods and fields
    }
    {
        // Subclasses
        // Subclasses are defined using the "extend" keyword
        // The subclass inherits all of the properties, fields and methods of the superclass
        // Subclass can also override superclass methods

        /**
         * Class FinancialInstrument
         */
        class FinancialInstrument {
            /**
             *
             * @param {string} company
             * @param {string} symbol
             * @param {number} price
             */

            constructor(company,symbol, price) {
                this.company = company;
                this.symbol = symbol;
                this.price = price;
            }

            /**
             * @param {number} count
             * @returns
             */
            totalPrice(count) {
                return this.price * count;
            }

        }

        /**
         * Stock is a subclass that extends the superclass FinancialInstrument
         */
        class Stock extends FinancialInstrument {
            // A static Field
            static DISCOUNT_PCT = 2.5;

            /**
             *
             * @param {string} Company
             * @param {string} Symbol
             * @param {number} price
             * @param {string} exchange
             */
            constructor(company, symbol, price, exchange) {
                // a subclass MUST invoke the constructor of it's superclass
                super(company, symbol, price)
                // The keyword "this" can only be referenced in the subclass
                // constructor after the superclass constructor has been called
                this.exchange = exchange;
            }

            // A subclass can override a method from a superclass
            totalPrice(count) {
                return this.price * (100 - Stock.DISCOUNT_PCT) / 100 * count;
            }
        }
        let fund1 = new FinancialInstrument('Janus', 'JAGIX', 96.2);
        let stock1 = new Stock('Boeing', 'BA', 94.67, 'NASDAQ')

        console.log(`Fund1 is ${fund1.company}`);
        console.log(fund1);
        console.log(`Stock1 is ${stock1.company}`);
        console.log(stock1);

        console.log(fund1.totalPrice(10));
        console.log(stock1.totalPrice(10));
    }
    // Assignment 2 walkthrough videos
    {
        let val1 = 23;
        let val2 = 23;
        let val3 = '23';

        console.log(val1 === val2);
        console.log(val1 === val3);

        const student1 = {name: 'Laura', age: 29};
        const student2 = {name: 'Laura', age: 29};

        console.log(student1 === student1);
        console.log(student1 === student2);  // not the same because they are different objects

        // However, if we compare the values of the objects they are strictly equal
        console.log(student1.name === student2.name);
        console.log(student2.age === student1.age);


    }
}

// Reducer functions - Assignment 2 2nd part
{
    // Array,prototype.reduce()
    const array1 = [1,2,3,4];
    // function expression
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    console.log(array1.reduce(reducer));

    // this reducer function will type convert automatically, leading to unintended consequences
    const array2 = [1, 2, true, 'a', 4, true];
    console.log(array2.reduce(reducer));  // Returns 4a4true
}

