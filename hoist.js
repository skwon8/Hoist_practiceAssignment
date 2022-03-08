// 1. FIRST PROBLEM
// console.log(hello);                                   
// var hello = 'world';

// /*
// 1. var hello;
// 2. console.log(hello);  
// 3. hello = 'world';
// */

// ================================================================

// 2. SECOND PROBLEM
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

/*
1. var needle;
2. function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
3. needle = 'haystack';
4. test();
*/

// ================================================================

// 3. THIRD PROBLEM
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

/*
1. var brendan;
2. function print() {
    brendan = 'only okay';
    console.log(brendan);
}
3. brendan = 'super cool';
4. console.log(brendan);
*/

// ================================================================

// 4. FOURTH PROBLEM
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
/*
1. var food;
2. function eat(){
    var food;
    food = 'gone';
    food = 'half-chicken';
    console.log(food);
}
3. food = 'chicken';
4. console.log(food);
*/

// ================================================================

// 5. FIFTH PROBLEM
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

/*
1. var mean
2. var mean = function () {
    var food;
    food = "fish";
    console.log(food);
    food = "chicken";
    var food = "fish";
    console.log(food);
}
3. mean();
4. console.log(food);
5. console.log(food);
*/

// ================================================================

// 6. SIXTH PROBLEM
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

/*
1. var genre;
2. function rewind() {
    var genre
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
3. console.log(genre);
4. genre = "disco";
5. rewind();
6. console.log(genre);
*/

// ================================================================

// 7. SEVENTH PROBLEM
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

/*
1. dojo = "san jose";
2. console.log(dojo);
3. learn();
4. function learn() {
    var dojo;
    dojo = "burbank";
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
}
5. console.log(dojo);
*/

// ================================================================

// 8. EIGHTH PROBLEM
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

/*
1. console.log(makeDojo("Chicago", 65));
2. console.log(makeDojo("Berkeley", 0));
3. function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
*/

// ================================================================


