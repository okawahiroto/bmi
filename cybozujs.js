console.log('a');

// var result = window.confirm('確認ダイアログが表示されます');

// if (result) {
//   console.log('はい　が押されました');
// } else {
//   console.log('キャンセル　が押されました');
// }

var score = 90;

if (score > 80) {
  console.log('やったね、合格です');
} else {
  console.log('残念、不合格です');  
}

// BMI 体重(kg) / 身長(m)の二乗

// BMI < 18.5 yase
// 18.5 < BMI < 25 hyojun
// 25 < BMI < 30 太り気味
// 30 < BMI himan

// var height = prompt('あなたの身長(m)を入力してください', '');
// var weight = prompt('あなたの体重(kg)を入力してください', '');



// var text = element.textContent;
// element.textContent = "this is some sample text";
// console.log(text);

window.onload = function() {

  var height = document.getElementById("height").textContent;
  var weight = document.getElementById("weight").textContent;
  var bmi = document.getElementById("bmi").textContent;
  var result = document.getElementById("result").textContent;  

  var h = prompt('あなたの身長(m)を入力してください', '');
  var w = prompt('あなたの体重(kg)を入力してください', '');
  
  var b = w / (h * h);
  var x = Math.round(b * 10) / 10;

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

  document.getElementById("height").textContent = h;
  document.getElementById("weight").textContent = w;
  document.getElementById("bmi").textContent = x;
  document.getElementById("result").textContent = r;

}