function greeting() {

    let a = document.querySelector('input[name="left"]');
    let b = document.querySelector('input[name="right"]');

    let nA = Number(a.value);
    let nB = Number(b.value);

    let sum = nA + nB;
    let answer = document.querySelector('span#answer');
    answer.textContent = sum;
}
    let b = document.querySelector('button#calc');
    b.addEventListener('click', greeting);