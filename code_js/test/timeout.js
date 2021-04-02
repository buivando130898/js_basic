function first(callback){
    setTimeout(() => {
        console.log(1);
    }, 500);
    callback();
}

function sencond(){
    console.log(2);
}
first(sencond);