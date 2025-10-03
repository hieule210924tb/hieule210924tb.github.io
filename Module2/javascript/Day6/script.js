// Quizzes
// 1. Khai báo 1 function nhận vào chuỗi slogan. Cứ sau mỗi 5 giây, in ra slogan đó kèm biến đếm counter bắt đầu từ 1.
// 2. Hãy sử dụng phương thức map để biến đổi 1 mảng texts bao gồm các chuỗi thành 1 mảng textsLength có các phần tử
// là chiều dài tương ứng của từng chuỗi trong mảng texts.
//Câu 1
// function printSlogan(slogan) {
//   let counter = 1;
//   setInterval(() => {
//     console.log(`${slogan} - ${counter}`);
//     counter++;
//   }, 5000);
// }
// printSlogan("Thêm");
//Câu 2
// const array = [];
// const texts = ["aaaaaaaa", "bbbbbb", "cccccccccc"];
// texts.map((item, index) => {
//   array.push(item.length);
// });
// console.log(array);

/* 
Thực hành
1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.
2. Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.
3. Khai báo 1 function với đầu vào là day, month, year. Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
4. Cho bộ dữ liệu về users như sau: data.js
-Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
-Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
-Đếm số lượng user có age > 50.
-Đếm số lượng user đã kết hôn và chưa kết hôn.
-Đếm số lượng user theo từng ngành nghề tương ứng.
    Output:
    {
        "Dentist": 5,
        "Developer": 13,
        "Doctor": 6,
        "Farmer": 8,
        "Project Manager": 5,
        "Teacher": 9,
        "Worker" : 4
    }
 
5. Xây dựng chương trình quản lý kho hàng như sau:
-Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
-Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.
```jsx
 
const storage = {
    name: 'Fake Storage',
    address: 'HN',
    owner: 'Dung Tien',
    items: [
        {
id: 1, name: 'Product 1', category: 'Furniture', pricce: 20
        },
        {
            id: 2, name: 'Product 2', category: 'Device', pricce: 110
        },
        {
            id: 3, name: 'Product 3', category: 'Cloth', pricce: 2
        },
    ]
}
jsx```
*Xây dựng chương trình tương tác với kho hàng. Nhập vào action là yêu cầu ứng với các thao tác:
    Action 1 -> Ý nghĩa: Sửa thông tin kho hàng
    Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho
    Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng
    Action 4 -> Ý nghĩa: Xóa mặt hàng
-Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác.
-Mô tả chi tiết
+action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
+action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại. 
+action = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
+action = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.
*/
//cau 1
// function giaiPTBac2(a, b, c) {
//   if (a === 0) {
//     console.log("a phải khác 0");
//   }

//   const delta = b * b - 4 * a * c;
//   let nghiem = [];

//   if (delta > 0) {
//     const x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     const x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     nghiem = [x1, x2];
//   } else if (delta === 0) {
//     const x = -b / (2 * a);
//     nghiem = [x];
//   } else {
//     nghiem = [];
//   }

//   return nghiem;
// }

// console.log(giaiPTBac2(1, -3, 2));
// cau 2
// function tamGiac(a, b, c) {
//   if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// tamGiac(2, 3, 4);

//cau 3 :Khai báo 1 function với đầu vào là day, month, year. Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
// const date = (d, m, y) => {
//   if (y < 1 || m < 1 || m > 12 || d < 1) {
//     console.log("không hợp lệ");
//   } else {
//     console.log(`day: ${d} month: ${m} year: ${y}`);
//   }
// };
// date(5, 12, 2021);

//cau 4
let users = [
  {
    id: 1,
    first_name: "Kenton",
    last_name: "Samples",
    email: "ksamples0@washingtonpost.com",
    gender: "Male",
    age: 35,
    job: "Worker",
    country: "UK",
    is_married: false,
  },
  {
    id: 2,
    first_name: "Marc",
    last_name: "Jurries",
    email: "mjurries1@flavors.me",
    gender: "Female",
    age: 54,
    job: "Teacher",
    country: "Vietnam",
    is_married: false,
  },
  {
    id: 3,
    first_name: "Bruis",
    last_name: "McBeath",
    email: "bmcbeath2@cam.ac.uk",
    gender: "Female",
    age: 59,
    job: "Developer",
    country: "UK",
    is_married: false,
  },
  {
    id: 4,
    first_name: "Kennett",
    last_name: "Lammert",
    email: "klammert3@sun.com",
    gender: "Female",
    age: 22,
    job: "Dentist",
    country: "Vietnam",
    is_married: false,
  },
  {
    id: 5,
    first_name: "Feodora",
    last_name: "Clemot",
    email: "fclemot4@craigslist.org",
    gender: "Female",
    age: 46,
    job: "Dentist",
    country: "Vietnam",
    is_married: false,
  },
  {
    id: 6,
    first_name: "Betta",
    last_name: "Bittlestone",
    email: "bbittlestone5@digg.com",
    gender: "Female",
    age: 15,
    job: "Project Manager",
    country: "Russia",
    is_married: false,
  },
  {
    id: 7,
    first_name: "Tedda",
    last_name: "Surfleet",
    email: "tsurfleet6@shutterfly.com",
    gender: "Male",
    age: 19,
    job: "Farmer",
    country: "US",
    is_married: true,
  },
  {
    id: 8,
    first_name: "Alva",
    last_name: "Cathcart",
    email: "acathcart7@twitter.com",
    gender: "Female",
    age: 28,
    job: "Developer",
    country: "Vietnam",
    is_married: true,
  },
  {
    id: 9,
    first_name: "Francesca",
    last_name: "Sprionghall",
    email: "fsprionghall8@tumblr.com",
    gender: "Female",
    age: 32,
    job: "Farmer",
    country: "Vietnam",
    is_married: false,
  },
  {
    id: 10,
    first_name: "Stanfield",
    last_name: "Huc",
    email: "shuc9@amazon.co.jp",
    gender: "Genderfluid",
    age: 60,
    job: "Doctor",
    country: "US",
    is_married: false,
  },
  {
    id: 11,
    first_name: "Drugi",
    last_name: "Hatliff",
    email: "dhatliffa@php.net",
    gender: "Female",
    age: 42,
    job: "Project Manager",
    country: "Vietnam",
    is_married: false,
  },
  {
    id: 12,
    first_name: "Farica",
    last_name: "Rutley",
    email: "frutleyb@moonfruit.com",
    gender: "Female",
    age: 28,
    job: "Developer",
    country: "Vietnam",
    is_married: false,
  },
  {
    id: 13,
    first_name: "Ania",
    last_name: "Perllman",
    email: "aperllmanc@virginia.edu",
    gender: "Female",
    age: 57,
    job: "Project Manager",
    country: "UK",
    is_married: false,
  },
  {
    id: 14,
    first_name: "Dallas",
    last_name: "Hans",
    email: "dhansd@photobucket.com",
    gender: "Female",
    age: 53,
    job: "Farmer",
    country: "UK",
    is_married: true,
  },
];
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// -Đếm số lượng user có age > 50.
// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }
//==Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// const obj = (a) => {
//   users.map((user, index) => {
//     if (user.id === a) {
//       const userId = user;
//       console.log(userId);
//     }
//   });
// };
// obj(3);
//== Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// const infoEmail = (keyword) => {
//   users.filter((user) => {
//     const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
//     if (fullName.includes(keyword.toLowerCase())) {
//       console.log(user.email);
//     }
//   });
// };
// infoEmail("Perllman");
//== -Đếm số lượng user có age > 50.
// const counts = users.filter((item) => item.age > 50).length;
// console.log("Số lượng user có age > 50:", counts);
//== -Đếm số lượng user đã kết hôn và chưa kết hôn.
// const isMarried = [];
// const isNotMarried = [];
// users.map((item, index) => {
//   console.log(item);
//   item.is_married ? isMarried.push(item) : isNotMarried.push(item);
// });
// console.log("Số lượng đã kết hôn " + isMarried.length);
// console.log("Số lượng chưa kết hôn " + isNotMarried.length);
//== -Đếm số lượng user theo từng ngành nghề tương ứng.
// const job = [];
// const counts = {};
// users.map((item) => {
//   job.push(item.job);
// });
// for (let i = 0; i < job.length; i++) {
//   if (counts[job[i]]) {
//     counts[job[i]]++;
//   } else {
//     counts[job[i]] = 1;
//   }
// }
// console.log(counts);

// 5. Xây dựng chương trình quản lý kho hàng như sau:
// -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.
// ```jsx

const storage = {
  name: "Fake Storage",
  address: "HN",
  owner: "Dung Tien",
  items: [
    {
      id: 1,
      name: "Product 1",
      category: "Furniture",
      pricce: 20,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Device",
      pricce: 110,
    },
    {
      id: 3,
      name: "Product 3",
      category: "Cloth",
      pricce: 2,
    },
  ],
};
// *Xây dựng chương trình tương tác với kho hàng. Nhập vào action là yêu cầu ứng với các thao tác:
//     Action 1 -> Ý nghĩa: Sửa thông tin kho hàng
//     Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho
//     Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng
//     Action 4 -> Ý nghĩa: Xóa mặt hàng
// -Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác.
// -Mô tả chi tiết
// +action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
// +action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại.
// +action = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
// +action = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.

//Action 1:
// storage.name = "Read Strage";
// storage.address = "Thai Binh";
// storage.owner = "Hieu Le";
// console.log(storage);
// Action 2:
// function addItem(storage, id, name, category, pricce) {
//   const exit = storage.items.some((item) => item.id === id);
//   if (exit) {
//     console.log(`Đã trùng mặt hàng ${id} yêu cầu nhập lại.`);
//   } else {
//     storage.items.push({
//       id: id,
//       name: name,
//       category: category,
//       pricce: pricce,
//     });
//   }
// }
// addItem(storage, 1, "Product 7", "Both", 1);
// console.log(storage);
// Action 3
// function findItem(storage, name) {
//   const search = storage.items.filter((item) => item.name === name);
//   if (name == "") {
//     console.log(storage.items);
//   } else {
//     console.log(search);
//   }
// }
// findItem(storage, "Product 1");
// Action 4 Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.
function deleteItem(storage, id) {
  const index = storage.items.findIndex((item) => item.id === id);
  console.log(index);
  if (index !== -1) {
    storage.items.splice(index, 1);
    console.log(` Đã xoá sản phẩm có mã = ${id}`);
  } else {
    console.log(`Không tìm thấy mã mặt hàng = ${id}. Kết thúc!`);
  }
}

deleteItem(storage, 6);
console.log(storage.items);
