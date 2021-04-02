
function cha(){
    let x = 10;
    return function con(p){
        ++x;
        return x + p;
    }
}



const bien = cha();

console.log(bien(5));
console.log(bien(5));

console.log(x);


