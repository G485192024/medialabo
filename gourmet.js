
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
 let shops = data.results.shop;

  for (let shop of shops){
    console.log("名前: " + shop.name);
    console.log("アクセス: " + shop.access);
    console.log("住所: " + shop.address);
    console.log("予算: " + shop.budget.name);
    console.log("キャッチコピー: " + shop.catch);
    console.log("ジャンル: " + shop.genre.name);
    console.log("営業時間: " + shop.open);
    console.log("最寄駅: " + shop.station_name);
    console.log("サブジャンル: " + shop.sub_genre.name);
  }
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let resultDiv = document.querySelector('#result');

  let h2s = document.querySelectorAll('h2');
  for (let h2 of h2s) {
    h2.remove();
  }
  let h3s = document.querySelectorAll('h3');
  for (let h3 of h3s) {
    h3.remove();
  }
  let h4s = document.querySelectorAll('h4');
  for (let h4 of h4s) {
    h4.remove();
  }
  let uls = document.querySelectorAll('ul');
  for (let ul of uls) {
    ul.remove();
  }

  let shops = data.results.shop;

  let h2 = document.createElement('h2');
  h2.textContent = "グルメ情報（検索結果は" + shops.length + "件）";
  resultDiv.insertAdjacentElement('beforeend',h2);

  for (let i = 0; i < shops.length; i++) {
    let shop = shops[i];

    let count = document.createElement('h3');
    count.textContent = "検索結果" + (i + 1) + "件目";
    resultDiv.insertAdjacentElement('beforeend',count);

    let jyoho = ["名前", "アクセス", "住所", "予算", "キャッチコピー","ジャンル", "営業時間", "最寄駅"];   
    let values = [
      shop.name,
      shop.access,
      shop.address,        
      shop.budget.name,
      shop.catch,
      shop.genre.name,
      shop.open,
      shop.station_name,
      ];

    let ul = document.createElement('ul');

    for (let j = 0;j < jyoho.length; j++) {
      let li = document.createElement('li');
      li.textContent = jyoho[j] + ": " + values[j];
      ul.insertAdjacentElement('beforeend',li);
    }
    if (shop.sub_genre != undefined && shop.sub_genre.name != undefined ) {
      let li = document.createElement('li');
      ul.insertAdjacentElement('beforeend', li);
      li.textContent = "サブジャンル: " + shop.sub_genre.name;
    }
    resultDiv.insertAdjacentElement('beforeend',ul);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('button#kensaku');
    b.addEventListener('click',sendRequest)

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let input = document.querySelector('input');
  let genre = input.value
  let resultDiv = document.querySelector('#result');

  input.value = "";

  let h2s = document.querySelectorAll('h2');
  for (let h2 of h2s) {
    h2.remove();
  }
  let h3s = document.querySelectorAll('h3');
  for (let h3 of h3s) {
    h3.remove();
  }
  let h4s = document.querySelectorAll('h4');
  for (let h4 of h4s) {
    h4.remove();
  }
  let uls = document.querySelectorAll('ul');
  for (let ul of uls) {
    ul.remove();
  }
  if (genre === "") {
    let h4s = document.createElement('h4');
    h4s.textContent = "探したい語句を教えてね ヽ(・∀・)ノ";
    resultDiv.insertAdjacentElement('beforeend', h4s);
    return;
  } 
  let keywords = [
    "居酒屋",
    "ダイニングバー・バル",
    "創作料理",
    "和食",
    "洋食",
    "イタリアン・フレンチ",
    "中華",
    "焼肉・ホルモン",
    "アジア・エスニック料理",
    "各国料理",
    "カラオケ・パーティ",
    "バー・カクテル",
    "ラーメン",
    "カフェ・スイーツ",
    "その他グルメ",
    "お好み焼き・もんじゃ",
    "韓国料理"
  ];
  let codes = [
  "G001","G002","G003","G004","G005","G006","G007","G008",
  "G009","G010","G011","G012","G013","G014","G015","G016","G017"
  ];
  for (let i = 0; i < keywords.length; i++) {
    if (genre === keywords[i]) { 
      genre = codes[i];
      break; 
    }else if (i === keywords.length - 1) {
      let h4s = document.createElement('h4');
      h4s.textContent = "該当するお店ありません";
      resultDiv.insertAdjacentElement('beforeend', h4s);
      return;
    }
  }
  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + genre + '.json';

  axios.get(url)
    .then(showResult)  
    .catch(showError)  
    .then(finish);
  
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  } 
    printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
// おすすめのキーワード
function suggest() {

  let oldlist = document.querySelector('ul#hot');
  if (oldlist != undefined) {
    oldlist.remove();
  }
  let keywords = [
    "居酒屋",
    "ダイニングバー・バル",
    "創作料理",
    "和食",
    "洋食",
    "イタリアン・フレンチ",
    "中華",
    "焼肉・ホルモン",
    "アジア・エスニック料理",
    "各国料理",
    "カラオケ・パーティ",
    "バー・カクテル",
    "ラーメン",
    "カフェ・スイーツ",
    "その他グルメ",
    "お好み焼き・もんじゃ",
    "韓国料理"
  ]

  let ul = document.createElement('ul');
  ul.setAttribute('id','hot');

  for (let i = 0; i < keywords.length; i++) {
      let li = document.createElement('li');
      li.textContent = keywords[i];
      ul.insertAdjacentElement('beforeend', li);
  }
  let osusumeBtn = document.querySelector('button#kensaku');
  osusumeBtn.insertAdjacentElement('afterend', ul);
} 
let osusumeBtn = document.querySelector('button#osusume');
osusumeBtn.addEventListener('click', suggest);