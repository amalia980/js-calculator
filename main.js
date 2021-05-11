const get = (id) => document.getElementById(id);

const input1 = get("input1");
const input2 = get("input2");

const input3 = get("input3");

//buttons

const clickplus = get("plus");
const clickminus = get("minus");
const clickdiv = get("div");
const clickmulti = get("multi");


function addition() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const result = value1 + value2;

    input3.value= result;
}

function subtraction() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const result = value1 - value2;

    input3.value= result;
}

function division() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const result = value1 / value2;

    input3.value= result;
}

function multiplication() {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const result = value1 * value2;

    input3.value= result;
}

clickplus.addEventListener("click", addition);
clickminus.addEventListener("click", subtraction);
clickdiv.addEventListener("click", division);
clickmulti.addEventListener("click", multiplication);