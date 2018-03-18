// htmlの読み込みが終わってから実行
window.onload = function() {

  // htmlの要素取得
  var height = document.getElementById("height").textContent;
  var weight = document.getElementById("weight").textContent;
  var bmi = document.getElementById("bmi").textContent;
  var result = document.getElementById("result").textContent;  

  // ダイアログで身長・体重入力
  var h = prompt('あなたの身長(m)を入力してください', '');
  var w = prompt('あなたの体重(kg)を入力してください', '');
  
  // BMIの計算
  var b = w / (h * h);

  // BMIの値を小数点第二位で四捨五入
  var x = Math.round(b * 10) / 10;

  // 結果の変数
  var r = "";
  
  if (b < 18.5) {
    r = '痩せ型';
  } else if (b < 25) {
    r = '標準体型';
  } else if (b < 30) {
    r = '太り気味';
  } else {
    r = '肥満体型'; 
  }

  // htmlの各要素へ入力
  document.getElementById("height").textContent = h;
  document.getElementById("weight").textContent = w;
  document.getElementById("bmi").textContent = x;
  document.getElementById("result").textContent = r;
}