var res = document.getElementsByTagName('h4');
for(var i=0; i<res.length; i++) {
    if(res[i].innerHTML=="系统状态") {
        var x = res[i].parentElement;
        if(x.nodeName == "DIV") {
            x.style.display = 'none';
            break;
        }
    }
}

var img_tags = document.getElementsByClassName("highslide");
img_tags[0].click();

var tb_area = document.getElementById("verify-msg");
tb_area.value="身份证和证件不符合";
tb_area.value+="\n理由2";


