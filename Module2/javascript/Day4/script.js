// cho a = 10, b = 20, c= 5
// d = ++a + b++ - c--;
// e = d++ - --c + a++ + b--;
// d= a:11 +b:20 -c:5 = 26
// -> a = 11, b= 21 , c =4 , d =26
// e =d:26 - c:3 + a:11 + b:21 =55
// kết quả -> a =12 , b =20 , c =3 , d = 27  , e = 55

// x = true, y = true, z = false

// x && y && z → false
// x && y && !z → true
// (x && y) || z → true
// (x && y) || !z → false
// x && (y || z) → true
// x && !(y || z) → false
// x && (y || !z) → true
// x && (!y || z) → false

// var nam = 2000;
// var thang = 2;

// if (thang < 1 || thang > 12) {
//   console.log("Tháng không hợp lệ. Vui lòng chọn từ 1 đến 12.");
// } else {
//   switch (thang) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       console.log("tháng " + thang + "có 31 ngày");
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       console.log("tháng " + thang + "có 30 ngày");
//       break;
//     case 2:
//       if (nam % 4 === 0 && nam % 100 !== 0) {
//         console.log("tháng " + thang + " có 29 ngày");
//       } else {
//         console.log("tháng " + thang + " có 28 ngày");
//       }
//       break;
//   }
// }

// bài 1
// let string = "afgg";
// if (string.length > 8) {
//   console.log("chuỗi này ok");
// } else {
//   console.log("nhập thêm chuỗi nữa đi");
// }
// bài 2

// let a = 5;
// if (a >= 18) {
//   console.log("Đủ 18 rồi , quẩy tiếp");
// } else if (a >= 16 && a < 18) {
//   console.log("Đợi thêm chút nữa");
// } else {
//   console.log("Còn trẻ quá");
// }

// bài 3:Hãy tính tổng các số từ 1 đến 50.

// let total = 0;
// for (let a = 1; a <= 50; a++) {
//   total += a;
// }
// console.log(total);

// Hãy tính tổng các số chẵn từ -10 đến 50.

// let total = 0;
// for (let a = -10; a <= 50; a += 2) {
//   total += a;
// }
// console.log(total);

// Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// for (let a = -100; a <= 100; a++) {
//   if (a % 9 === 0) {
//     console.log(a);
//   }
// }

// Hãy dùng while để in ra dãy số từ 1 đến 200.
// let a = 1;
// while (a <= 200) {
//   console.log(a++);
// }

// Hãy nhập vào 1 chuỗi s và 1 số l. Hãy thêm vào cuối chuỗi s ký tự ‘a’ cho đến khi độ dài chuỗi s >= l.

// let s = "s";
// let l = 5;
// while (s.length < l) {
//   s += "a";
// }

// console.log("Chuỗi sau khi xử lý:", s);
// Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x,
// giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.

// const array = ["cam", "hồng", "mít"];
// const array2 = "xoài";
// const array3 = "nhãn";
// array[array.length] = array2; //thêm một phần tử vào cuối mảng
// console.log(array);
// const newArr = [array3];
// for (let i = 0; i < array.length; i++) {
//   newArr[newArr.length] = array[i];
// }
// console.log(newArr); //thêm một phần tử vào đầu mảng

// for (let i = 0; i < array.length; i++) {
//   newArr[newArr.length] = array[i];
// }
// newArr.length = newArr.length - 1;
// console.log(newArr); //xóa một phần tử cuối mảng
/////
// let arrNum = [1, 2, 3, 4];

// for (let i = 0; i < arrNum.length; i++) {
//   arrNum[i] = arrNum[i + 1];
// }
// arrNum.length = arrNum.length - 1;

// console.log(arrNum); // xóa phần tử đầu mảng

const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];

//tìm phần tử nhỏ nhất/ lớn nhất trong mảng

let min = numbers[0];
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(min);
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);
//tổng các phần tử trong mảng
let a = 0;
for (let i = 0; i < numbers.length; i++) {
  a += numbers[i];
}
console.log(a);
// tính trung bình cộng
let tbCong = a / numbers.length;
console.log(tbCong);
//tìm phần tử đầu tiên chia hết cho 3
let c = null;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    c = numbers[i];
    break;
  }
}
console.log("Phần tử chia hết cho 3: " + c);
// [10, 4, -7, 9, 100, 3, -21, 0, 33];
// các phần tử là số nguyên tố trong mảng
for (let i = 0; i < numbers.length; i++) {
  let soNguyenTo = true;

  if (numbers[i] < 2) {
    soNguyenTo = false;
  } else {
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        soNguyenTo = false;
      }
    }
  }

  if (soNguyenTo) {
    console.log(numbers[i] + " là số nguyên tố");
  } else {
    console.log(numbers[i] + " không phải là số nguyên tố");
  }
}
