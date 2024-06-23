// Hàm thông thường 
function MyFunc(log) {
    console.log(log);
}

MyFunc('Message...');

// Hàm arrow function 
const logger = (log) => {
    console.log(log);
}

logger('Message...');

// VD1:
const sum = (a,b) => a + b; 
console.log(sum(2,2));


// VD2: 
const logger1 = (log) => console.log(log);

logger1('Message...')

