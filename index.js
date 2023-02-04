function randomColor() {
var n=Math.round(Math.random()*999999);
document.getElementById('body').style.backgroundColor=`#${n}`;
}
document.getElementById('btn').onclick=randomColor;
