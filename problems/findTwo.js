const array = [1,2,3,-1,-2,0]

function findTwo(arr){
  for(let i = 0 ; i < arr.length ; i++){
    for(j = 0 ; j < arr.length ; j++){
        if(arr[i] + arr[j] === 0){
            return [i , j]
        }
    }
  }
}

console.log(findTwo(array))