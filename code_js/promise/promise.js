1. //Pending  chờ thành công thất bại
2.  // logic thành công
3.  // thất bại 

var promise = new Promise(
    function(resolve, reject) {
        let data = "lol";
        // logic 
        // Thành công : resolve()
        resolve(data);
        // Thất bại: reject()
    }
);

promise
    .then(function(data){
        // SAu khi
        console.log("Thanh cong: ",data);
    })

    .catch(function(){
        // Khi có lỗi
        console.log("Erro");
        
    })
    /*
    .finally(function(){
        console.log("Xong");
        
    });
    */