var i = 0;
var a = ["点我", "本网站由cloudflare赞助制作","编程吗","同城编代码"];
var strlen = a.length;


document.getElementById('91').textContent = a[i];

function func1() {
  i = (i + 1) % strlen;
  document.getElementById('91').textContent = a[i];
}
