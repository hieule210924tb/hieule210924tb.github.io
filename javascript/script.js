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

let s = "s";
let l = 5;
while (s.length < l) {
  s += "a";
}

console.log("Chuỗi sau khi xử lý:", s);
// Nhập vào 2 số 0 <= x < y <= 100. Hãy tăng dần giá trị của x,
// giảm dần giá trị của y và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.
