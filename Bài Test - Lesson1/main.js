function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

function tinhTongSoNguyenTo() {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    if (a >= b) {
      alert("Số a phải nhỏ hơn số b.");
      return;
    }
    let sum = 0;
    for (let i = a; i <= b; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
    document.getElementById("result").innerHTML = `Tổng các số nguyên tố trong khoảng từ ${a} đến ${b} là ${sum}.`;
  }



//BT2:
function NumberOneTriangle(num){
    if(num < 1 || num > 10){
        console.log("số đầu vào phải nằm trong khoảng 1-10");
        return;
    }
}