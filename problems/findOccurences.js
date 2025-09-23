const string = "apple"


function findOccurences(str){
    let map = {}
    for(let i = 0 ; i < str.length ; i++){
        if(map[str[i]]){
          map[str[i]]++
        }else{
            map[str[i]] = 1
        }
    }
    return map
}



console.log(findOccurences(string))