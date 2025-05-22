//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
function show() {
	let P = document.createElement('p');
	P.textContent = campus.address;

	let H2addr = document.querySelector('h2#addr');	
	H2addr.insertAdjacentElement('afterend',P);

	let ul = document.createElement('ul');

	let H2dept = document.querySelector('h2#dept');
	H2dept.insertAdjacentElement('afterend',ul);

	for (let g of gakka) {
        let li = document.createElement('li');
        li.textContent = g.name; 
        ul.insertAdjacentElement('beforeend', li);
    }
}
  let b = document.querySelector('button#show');
  b.addEventListener('click', show);
