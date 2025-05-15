// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

  // 入力回数（予想回数）
  let kaisu = 1;

function hantei() {

    let kazu = document.querySelector('input[name="kazu"]');
    let yoso = Number(kazu.value)

    let kaisuSpan = document.querySelector('span#kaisu');
    let answerS = document.querySelector('span#answer');
    let resultP = document.querySelector('p#result');

    kaisuSpan.textContent = kaisu;
    answerS.textContent = yoso;
  
   resultP.textContent = kaisu + "回目の予想: " + yoso;
   
   if (kaisu > 3) {
    resultP.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
  }
  else if (yoso === kotae) {
    resultP.textContent = "正解です．おめでとう!";
    kaisu = 4;
  }else {
    if (kaisu === 3) {
      resultP.textContent = "まちがい．残念でした答えは " + kotae + " です．";
    } else if (yoso < kotae) {
      resultP.textContent = "まちがい．答えはもっと大きいですよ";
    } else {
      resultP.textContent = "まちがい．答えはもっと小さいですよ";
    }
  }
  if (kaisu < 4) {
    kaisu++;
  }
}
    let b = document.querySelector('button#print');
    b.addEventListener('click', hantei);