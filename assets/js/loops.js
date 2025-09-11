for(i = 0; i<10;i++){
    if(i % 2 == 0){
        console.log(i, "is even");
    }
}



// array
console.log("----------ARRAYS----------");
let f = ['A','B','C','D'];
console.log(f[0]);
f.push('E');
console.log("After Push f = ",f);

f.pop();
console.log("After pop f = ",f);


// Highest element in an array
let num = [10,25,8,4,27,9];
let max = num[0];
for(i=0;i<num.length;i++){
    if(num[i] > max){
        max = num[i];
    }
}
console.log("Highest number is",max)


// Reverse of an array
let arr = [10,20,30,40,50];
let rev = []
for(i=arr.length-1;i>=0;i--){
    rev.push(arr[i]);
}
console.log("Reversed array :",rev);

// Objects
console.log("------OBJECTS------");
let student ={
    name: "ABC",
    age: 23,
    mark: 90
}
console.log(student.age,student.name);