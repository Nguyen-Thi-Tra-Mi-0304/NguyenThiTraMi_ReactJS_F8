// 1. Định nghĩa key: value cho object 
var name = 'Javascript';
var price = 1000; 

var course = {
    name: name, 
    price: price
};

console.log(course);

// 2. Định nghĩa method cho object 
var name = 'Javascript';
var price = 1000; 

var course = {
    name: name, 
    price: price, 
    getName() {
        return this.name;
    }
};

console.log(course.getName());

//3. Định nghĩa key cho object dưới dạng biến 
var fielName = 'name';
var fielPrice = 'price';

const course = {
    [fielName]: 'Javascript',
    [fielPrice]: 1000
};

console.log(course);