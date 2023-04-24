/*
3. Nhập vào 2 dãy số d1, d2. Mỗi số trong mỗi dãy cách nhau bởi dấu ‘,’.
Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort).

*/
str_d1 = "123";
str_d2 = "34567";
let subString1 = str_d1.split("");
let subString2 = str_d2.split("");
console.log(subString1);
console.log(subString2);

// Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.

let check = true;
for(let number of str_d1){
    if(!str_d2.includes(number)){
        check = false;
        break;
    }
}
if(check){
    console.log("Các phần tử trong mảng d1 có nằm trong mảng d2");
}else{
    console.log("Có phần tử trong mảng d1 không nằm trong mảng d2");
}

// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
// let sum = 0;
// let arr = subString1;
// console.log(arr);
// for(let numberString of numbers){
//     let numberarr = numberString.split("");
//     for (let number of numberarr){
//         sum += parent(number);
//     }   
// }
// console.log("tổng các phần tử trong d1 là:", sum);



// Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
let arr_d1 = [2, 4, 12, 5, 7, 8, 9];
let arr_d2 = [0, 3, 4, 6, 10, 14, 18];
let arrNews = [];
for(let i = 0; i < arr_d1.length; i++){
    if(arr_d1[i] % 2 === 0 ){
        arrNews.push(arr_d1[i]);
    }
}
for(let i = 0; i < arr_d2.length; i++){
    if(arr_d2[i] % 2 === 0 ){
        arrNews.push(arr_d2[i]);
    }
}

// for(let value of arr_d1){
//     if(value % 2 === 0){
//         arrNews.push(value);
//     }
// }
console.log("Mảng mới gồm các phần tử chia hết cho 2 trong d2 và d1 là:", arrNews);