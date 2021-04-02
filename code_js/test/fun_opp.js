//https://www.youtube.com/watch?v=KDhgDyMQzME&list=PLmSai9ZRK6uyZ7L8k10pOSvQRhZbg1W4w&index=6

function sinhVien(name, age, diem){
    this.name = name;
    this.age = age;
    this.diem = diem;
    this.kq = function(){
        if(this.diem > 5) 
            console.log("hs kha");
        else console.log("hs kem");
    }
    
}

const stt1 = new sinhVien("do", 23, 9);

stt1.kq();
//Viết thêm hàm:
sinhVien.prototype.test = 30;
sinhVien.prototype.test1 = function() {
    console.log("dup");
};

console.log(stt1.test);
stt1.test1();

