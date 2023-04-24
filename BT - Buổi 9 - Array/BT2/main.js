/*
2. Khai báo 1 mảng s gồm các chuỗi bất kỳ. Nhập vào 1 chuỗi text.
Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.
Tìm những chuỗi trong mảng có chứa giá trị text.
Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.

*/
const arr = ["Javascript" , "PHP", "HTML", "CSS", "NodeJS", "ReactJS", "ExpressJS", "NestJS", "Typescript"];
let minLength = Infinity;
let minStr = "";

for(let i = 0; i < arr.length; i++){
    const s = arr[i];
    if(s.length < minLength){
        minLength = s.length;
        minStr = s;
    }
}
console.log(minStr);

//Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.
let newS = [];
for(let i = 0; i < arr.length; i++){
    newS.push(arr[i].slice(0, 3));
}
console.log(newS);


// Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’.