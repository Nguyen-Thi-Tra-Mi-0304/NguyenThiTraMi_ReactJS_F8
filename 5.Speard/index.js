function logger({name, price, ...rest}) {

    console.log(name);
    console.log(price);
    console.log(rest); // lấy nốt phần còn lại
}

logger({
    name: 'Javascript',
    price: 1000,
    description: 'Description Content'
});


function logger1 ([a, b], ...rest) {
    console.log(a);
    console.log(b);
}

logger1([2, 6, 12, 4, 7, 8])




// *** Speard
var array1 = ['Javascript', 'Ruby', 'PHP'];
var array2 = ['ReactJs', 'Dart'];
var array3 = [...array2, ...array1];

console.log(array3);

// VD2
var object1 = {
    name1: 'Javascript'
};
var object2 = {
    price1: 1000
};
var object3 = {
    ...object1, 
    ...object2
};

console.log(object3);

//Kết hợp Rest + Speard  */
var array = ['Javascript', 'PHP', 'Ruby'];

function logger2(...rest) {
    for (var i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

logger2(...array);