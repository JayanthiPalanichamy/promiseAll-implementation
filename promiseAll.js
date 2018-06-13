const promiseAll = (inputPromises) => {
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

const a = Promise.resolve(2);
const b = Promise.resolve(4);
const c = Promise.resolve(5);
promiseAll([a, b, c]).then(val => console.log(val)).catch(val => console.log(val));

const d = Promise.resolve(10);
const e = Promise.resolve(2);
const f = Promise.resolve(5);
const g = Promise.reject(7);
promiseAll([d, e, f, g]).then(val => console.log(val)).catch(val => console.log(`${val} is rejected`));
