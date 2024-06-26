var array = ['Javascript', 'PHP', 'Ruby'];

// var a = array[0];
// var b = array[1];
// var c = array[2];

var [a, b, c] = array;

console.log(a, b, c);

var course = {
    name: 'Javascript',
    price: 1000,
    image: 'image-address'
}

var {name, price, image} = course;

console.log(name, price, image);