const array = [1,2,2,2,3,4,4,5]

// Approach 1
// function removeDuplicate(arr){
//    let result = [] 
//     for(let i = 0 ; i < arr.length ; i++){
//       if(!result.includes(arr[i])){
//         result.push(arr[i])
//       }
//     }

//     return result
// }



// Approach 2
function removeDuplicate(arr) {
  let uniqueArr = []
  for(let i = 0; i < arr.length; i++) {
    let isDuplicate = false
    for (j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArr.push(arr[i])
    }
  }
  return uniqueArr
}

console.log(removeDuplicate(array))