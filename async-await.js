var async = require('asyncawait/async');
var await = require('asyncawait/await');

function asyncFunc(text, milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(text) }, milliseconds);
    });
}

var doStuff = async (function () {
    var result1 = await (asyncFunc('Hello', 1000));
    console.log(`result 1: ${result1}`);

    var result2 = await (asyncFunc(`${result1} there,`, 2000));
    console.log(`result 2: ${result2}`);

    var result3 = await (asyncFunc(`${result2} world.`, 3000));
    console.log(`result 3: ${result3}`);

    return result3;
});

doStuff()
.then(result => { console.log(result) })
.catch(err => { console.log(err) });