
let minh = function(a, b, c) {
    if (a > b && a > c) {
        console.log("The greatest among the three numbers is: " + a);
    } else if (b > a && b > c) {
        console.log("The greatest among the three numbers is: " + b);
    } else {
        console.log("The greatest among the three numbers is: " + c);
    }
};

minh(3, 5, 2); 
