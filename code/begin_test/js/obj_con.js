// object contructtor

function user(fname, lname, avatar) {
    this.fname = fname;
    this.lname = lname;
    this.avatar = avatar;
    this.getname = function(){
        return `${this.fname} ${this.lname}`
    }
}

user.prototype.khoa = "K20"   //thêm thuộc tính khoa = "K20"
user.prototype.truong = function() {      //thêm phương thức
    return "Vien dai hoc mo Ha Noi";
}

var author = new user("do", "bui", "av");
var use = new user("do", "bui", "av");

console.log(use.getname());

var coin = 10;
var danh_gia = coin >10 ? "nhieu" : coin < 10 ? "it" : "lol"
console.log(danh_gia);
