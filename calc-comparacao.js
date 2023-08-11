function calcular() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const select = document.getElementById('selected').value;

    if (select === '>') {
        total = n1 > n2;
    } else if (select === '>=') {
        total = n1 >= n2;
    } else if (select === '<') {
        total = n1 < n2;
    } else if (select === '<=') {
        total = n1 <= n2;
    } else if (select === '===') {
        total = n1 === n2;
    } else if (select === '!==') {
        total = n1 !== n2;
    } else if (select === '&&') {
        total = n1 && n2;
    } else {
        total = (n1 || n2);
    }

    // switch (select) {
    //     case '>':
    //         total = n1 > n2;
    //     break;
    // 
    console.log(total);
    document.getElementById("n3").value = total;



}
