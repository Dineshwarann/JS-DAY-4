//remove Duplicates

let a=[1,2,3,4,5,3,2,9,5,10];


(function(arr){
    const a=new Set(arr);
    console.log(Array.from(a));
})(a);