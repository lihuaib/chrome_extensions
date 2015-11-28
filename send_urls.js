var res = document.getElementsByTagName('a');
for(var i=0; i<res.length; i++) {
    if(res[i].text == "查看") {
        window.open(res[i].href);
    }
}
