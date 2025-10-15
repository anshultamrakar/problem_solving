// Polyfill of map . filter , reduce
// What is map()?
// Polyfill for map()
const nums = [1,2,3,4,5,6]


// Array.prototype.myMap = function(cb){
//    let temp = []
//    for(let i = 0 ; i < this.length ; i++){
//     temp.push(cb(this[i] , i, this))
//    }
//    return temp
// }

// const multiplyByThree = nums.myMap((num , index , arr) => num * 3)
// console.log(multiplyByThree)



// What is Filter()
// Polyfill for Filter

// Array.prototype.myFilter = function(cb){
//     let temp = []
//     for(let i = 0 ; i < this.length ; i++){
//         if(cb(this[i] , i , this)){
//             temp.push(this[i])
//         }
//     }
//     return temp
// }


// const moreThanTwo = nums.myFilter((num , index , arr) => num > 2)
// console.log(moreThanTwo)

// What is reduce()?


Array.prototype.myReduce = function(cb , initalVal){
 var accumulator = initalVal
 for(let i = 0 ; i < this.length ; i++){
    accumulator = accumulator ? cb(accumulator , this[i] , i , this) : this[i]
 }

 return accumulator
}
const sumOfArray = nums.myReduce((acc, currVal, index , arr) => {
   return acc + currVal
},0)



 console.log(sumOfArray)
