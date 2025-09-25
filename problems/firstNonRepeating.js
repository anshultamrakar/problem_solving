const string = "swiss"

function firstNonRepeating(str) {
    let map = {}
    for (let i = 0; i < str.length; i++) {
        if (!map[str[i]]) {
            map[str[i]] = 1
        } else {
            ++map[str[i]]
        }
    }

    for (let k in map) {
        if (map[k] === 1) {
            return k
        }
    }
}


console.log(firstNonRepeating(string))