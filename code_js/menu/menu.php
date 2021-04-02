<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<style>
* { 
    margin:0;
    padding:0;
    box-sizing:border-box; 
    font-family: inherit;
}

.menu {
    width: 700px;
    height: 56px;
    background-color: red;
    margin: auto;
    
}

ul.root > li {
    list-style: none;
    float: left;
    position: relative;
    
}

ul.root > li > a {
    text-decoration: none;
    color: yellow;
    padding: 0px 15px 0px 15px;
    line-height: 56px;
}

ul.root > li > a:hover{
    background-color: blue;
    display: block;
    transition: ease-in 0.30s;
    -moz-tranimation: ease-in 0.30s;
    -webkit-transition: ease-in 0.30s;
}

ul.menu_bieudo {
    width: 250px;  
    background-color: yellowgreen;
    min-height: 150px;
    display: none;
    position: absolute;
}

ul.menu_bieudo > li {
    list-style: none;
    
}


ul.menu_bieudo > li > a {
    color: yellow;
    text-decoration: none;
    display: block;
    border-top: 1px solid #f1f1f1;
    line-height: 56px;
}


ul.menu_bieudo > li > a:hover {
    background-color: blue;
    display: block;
    transition: ease-in 0.30s;
    -moz-tranimation: ease-in 0.30s;
    -webkit-transition: ease-in 0.30s;


}

ul.root > li:hover ul.menu_bieudo {
    display: block;
}


</style>



<body>

    <div class="menu">
        <ul class="root">
            <li><a href="">HOME</a></li>
            <li><a href="">BIỂU ĐỒ</a>
                <ul class="menu_bieudo">
                    <li><a href="">BIỂU ĐỒ SỐ 1</a></li>
                    <li><a href="">BIỂU ĐỒ SỐ 2</a></li>
                    <li><a href="">BIỂU ĐỒ SỐ 3</a></li>
                    <li><a href="">BIỂU ĐỒ SỐ 4</a></li>
                </ul>

                </li>    
            <li><a href="">THỐNG KÊ</a></li>
            <li><a href="">TÍNH TOÁN</a></li>
        </ul>
    </div>






    
</body>
</html>