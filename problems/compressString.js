const string = "aaabbc"

function compressString(str){
  let resultStr = ""
  let count = 1
  let currChar = str[0]
  for(let i = 1 ; i < str.length ; i++){
    if(str[i] === currChar){
      count++  
    }else{
        resultStr += currChar + count
        currChar = str[i]
        count = 1
    }
  }
  resultStr += currChar + count
  return resultStr
}

let result = compressString(string)
console.log(result)