promiseAll = (inputPromises) => {
    let resolvedPromises = [];
    return new Promise((resolve, reject) => {
        for (let promise of inputPromises) {
            promise.then((value) => {
                resolvedPromises.push(value);
                if (resolvedPromises.length === inputPromises.length) {
                    resolve(resolvedPromises)
                }
            }).catch((error) => {
                reject(error)
            })
        }
    })
};

a = Promise.resolve(2);
b = Promise.resolve(4);
c = Promise.resolve(5);
promiseAll([a, b, c]).then(val => console.log(val)).catch(val => console.log(val));

d = Promise.resolve(10);
e = Promise.resolve(2);
f = Promise.resolve(5);
g = Promise.reject(7);
promiseAll([d, e, f, g]).then(val => console.log(val)).catch(val => console.log(`${val} is rejected`));
