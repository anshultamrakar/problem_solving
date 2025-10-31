// A function alongs with its lexical scope bundled together and forms a closure 
function z(){
    var b = 13
    function x(){
        var a = 7 
        function y(){
            console.log(a , b)
        }
    return  y
    }
}

var z = x()
console.log(z)
z()