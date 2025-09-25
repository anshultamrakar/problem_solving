const array  =  [10, 2, 2 , 1, 0, 0, 10]


function findSingle(arr){
  let count = {} 
  for(let i = 0 ; i < arr.length ; i++){
    if(count[arr[i]]){
        count[arr[i]]++
    }else{
        count[arr[i]] = 1
    }
  }
  for(let k in count){
    if(count[k] === 1){
        return k
    }
  }
}
console.log(findSingle(array))