let item = document.getElementsByTagName("img");
  for (let index = 0; index < item.length; index++) {
    let class_name = item[index].getAttribute("src");
    if (class_name.indexOf("assets") != -1)
      item[index].setAttribute("src", "/theme/images/" + class_name);
  }
  
  var str = window.location.href;

if (str.indexOf("http://www.penhub.space") != -1)
{
                alert("网站已迁移至https://144.one，点击确定以跳转")
            window.location.href = str.replace("http://www.penhub.space", "https://144.one");
}
if (str.indexOf("https://www.penhub.space") != -1)
{
                alert("网站已迁移至https://144.one，点击确定以跳转")
            window.location.href = str.replace("https://www.penhub.space", "https://144.one");
}
if (str.indexOf("http://penhub.space") != -1)
{
        alert("网站已迁移至https://144.one，点击确定以跳转")
    window.location.href = str.replace("http://penhub.space", "https://144.one");
}
if (str.indexOf("https://penhub.space") != -1)
{
        alert("网站已迁移至https://144.one，点击确定以跳转")
    window.location.href = str.replace("https://penhub.space", "https://144.one");
}

if (str.indexOf("144.34.164.217") != -1) 
{
    /*var strrrr =*/
    window.location.href = str.replace("http://144.34.164.217", "https://144.one");
}if (str.indexOf("http://144.one") != -1) 
{
    /*var strrrr =*/
    window.location.href = str.replace("http://144.one", "https://144.one");
}

//处理表格
//var tablsdsdsdsdsdses = document.getElementById("tadzsfsadzfadfsdfsdfsdfdsble");   
var biaogemens = document.getElementsByName("tadzsfsadzfadfsdfsdfsdfdsble");
for (let aaa11i = 0; aaa11i < biaogemens.length; aaa11i++) 
  {  var tablsdsdsdsdsdses = biaogemens[aaa11i];  var odd = false;        var rows = tablsdsdsdsdsdses.getElementsByTagName("tr");        for (let i = 0; i < rows.length; i++) {            if(odd == true) {                rows[i].style.backgroundColor = "#ffc";                odd = false;            } else {                odd = true;            }        }}


setInterval(function () {
    let itsdsdsdem = document.getElementsByTagName("a");
  for (let indessssx = 0; indessssx < itsdsdsdem.length; indessssx++) {
    if( itsdsdsdem[indessssx].innerHTML.indexOf("站长统计")==-1) continue;
	  itsdsdsdem[indessssx].innerHTML = itsdsdsdem[indessssx].innerHTML.replace("站长统计",`<font color="#f5f5f5"></font>`);
  }
  
  
  
  
}, 500);



