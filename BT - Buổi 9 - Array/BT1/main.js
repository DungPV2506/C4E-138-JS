const arr = [2, 5, 8, 1, -4, 5, 10, 9, 18, 27];

/*
Tính tích của các phần tử trong mảng đó

let result = 1;
for(let i = 0; i < arr.length; i++){
    result = result * arr[i];
}
console.log("Tích các phần tử trong mảng là:", result);
*/




// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng
// B1: Lọc 1 mảng gồm các phần tử chia hết cho 2
// B2: Tìm min trong mảng chứa các phần tử chia heet cho 2


const arrChiaHetCho2 = [];
for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        arrChiaHetCho2.push(arr[i]);
    }
}
console.log(arrChiaHetCho2);

let min = arrChiaHetCho2[0];
for(let i = 0; i < arr.length; i++){
    if(min > arrChiaHetCho2[i]){
        min = arrChiaHetCho2[i];
    }
}
console.log("Số bé nhất chia hết cho 2 trong mảng là:", min);




/*
Tìm số lớn nhất mà chia hết cho 3 trong mảng.
B1: Tạo 1 mảng để lưu các số lớn nhất chia hết cho 3
B2: Duyệt các phần tử trong mảng
B3: Tìm max trong các phần tử lớn nhất chia hết cho 3
*/

const arrCacSoLonNhatChiaHetCho3 = [];
for(let i = 0; i <arr.length; i++){
    if(arr[i] % 3 === 0){
        arrCacSoLonNhatChiaHetCho3.push(arr[i]);
    }
}
console.log("Mảng lưu các số chia hết cho 3:", arrCacSoLonNhatChiaHetCho3);

let max = arrCacSoLonNhatChiaHetCho3[0];
for(let i = 0; i < arr.length; i++){
    if (max < arrCacSoLonNhatChiaHetCho3[i]){
        max = arrCacSoLonNhatChiaHetCho3[i];
    }
}
console.log("Số lớn nhất chia hết cho 3 là:", max);


/*
Tính giá trị trung bình của mảng
B1: Tính tổng giá trị trong mảng
B2: Tính trung bình công
*/
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log("Tổng giá trị trong mảng là:", sum);
const trungBinhCong = sum / arr.length;
console.log("Giá trị trung bình cộng của mảng là:", trungBinhCong);



/*
Lọc ra các số nguyên tố trong mảng
B1: Duyệt các phần tử trong mảng
*/
