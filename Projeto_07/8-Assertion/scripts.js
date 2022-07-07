let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = [];

function iterarArray(arr){
    if(arr.length == 0){
        throw new Error("O array precisa ter elementos")
    } else {
        for (let i = 0; i < arr.length; i++) {
        console.log(i);
      }
   }
}

iterarArray(arr);
iterarArray(arr2);
