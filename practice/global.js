// global object


// console.log(global)

setTimeout(() => {
    console.log('hello');
    clearInterval(interval)
}, 3000)

const interval = setInterval(() => {
    console.log('interval');
}, 1000)

console.log(__dirname)
console.log(__filename)

