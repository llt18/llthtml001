var i = 0;
var a = ["点我月抛", "本网站由91赞助自制作"];
var strlen = a.length;


document.getElementById('91').textContent = a[i];

function func1() {
  i = (i + 1) % strlen;
  document.getElementById('91').textContent = a[i];
}
