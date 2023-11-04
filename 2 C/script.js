// sum of all numbers

const array=[1,2,3,4,5,6,7,8,9,10,20];

//Expected Output is = 75

let a=()=>{
    let value=0;
    for(let i=0;i<array.length;i++){
        value=array[i]+value;
        
    }
    console.log("Sum of array : "+value);
}
a();