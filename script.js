const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const L_char = [
	"a",
	"b",
	"c",
	"d",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

const U_char = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

const symbols = ["@", "#", "$", "%"];

const s_char = [
	"{",
	"}",
	"[",
	"]",
	"(",
	")",
	"/",
	"'",
	'"',
	"`",
	"~",
	",",
	";",
	":",
	".",
	"<",
	">",
];

var len, n, lc, uc, s, sc, password;

function getData() {
	len = document.getElementById("len").value;
	n = document.getElementById("number").checked;
	lc = document.getElementById("L_char").checked;
	uc = document.getElementById("U_char").checked;
	s = document.getElementById("symbol").checked;
	sc = document.getElementById("s_char").checked;
	password = document.getElementById("password");
}

function gotoInitial() {
	document.getElementById("len").value = null;
	document.getElementById("number").checked = true;
	document.getElementById("L_char").checked = true;
	document.getElementById("U_char").checked = true;
	document.getElementById("symbol").checked = true;
	document.getElementById("s_char").checked = true;
}

var userChoices = [];
var pw = "";

function RandomInt(max) {
	return Math.floor(Math.random() * max);
}

function check_checked(check, obj) {
	if (check == true) {
		userChoices.push(obj);
	} else {
		return null;
	}
}

function makeEmpty() {
	for (i in userChoices) {
		userChoices.pop(i);
	}
	pw = "";
}

function getpw() {
	for (i = 0; i < len; i++) {
		var rand_Elem = userChoices[RandomInt(userChoices.length)];
		pw = pw + rand_Elem[RandomInt(rand_Elem.length)];
	}
	return pw;
}

function generatePassword() {
	getData();

	if (len <= 4096 && len >= 6 && len != null) {
		check_checked(n, num);
		check_checked(lc, L_char);
		check_checked(uc, U_char);
		check_checked(s, symbols);
		check_checked(sc, s_char);
		password.innerHTML = getpw();
	} else {
		alert("please enter a password length between 6 to 4096");
	}
	gotoInitial();
	makeEmpty();
}
