const data = [
  {
    id: "4i1z5sh6",
    name: "Nguyễn Thị ch8",
    gender: "nữ",
    age: 33,
    diemToan: 5,
    diemVan: 6,
    diemAnh: 7,
    languages: ["VI", "JP", "EN"],
  },
  {
    id: "k53hszmh",
    name: "Nguyễn Văn fdm",
    gender: "nam",
    age: 31,
    diemToan: 7,
    diemVan: 0,
    diemAnh: 6,
    languages: ["KR", "FR", "EN", "JP"],
  },
  {
    id: "3r4pwhyx",
    name: "Nguyễn Văn 0qc",
    gender: "nam",
    age: 27,
    diemToan: 4,
    diemVan: 1,
    diemAnh: 7,
    languages: ["JP", "VI"],
  },
  {
    id: "o0dpqlb1",
    name: "Nguyễn Thị per",
    gender: "nữ",
    age: 28,
    diemToan: 7,
    diemVan: 9,
    diemAnh: 7,
    languages: ["KR", "JP", "VI", "EN", "FR"],
  },
  {
    id: "7jyc57pv",
    name: "Nguyễn Thị 6pp",
    gender: "nữ",
    age: 34,
    diemToan: 8,
    diemVan: 3,
    diemAnh: 9,
    languages: ["VI", "JP", "EN", "FR"],
  },
  {
    id: "ywrb40pr",
    name: "Nguyễn Thị p3a",
    gender: "nữ",
    age: 21,
    diemToan: 2,
    diemVan: 0,
    diemAnh: 6,
    languages: ["JP", "EN"],
  },
  {
    id: "7rjczx3r",
    name: "Nguyễn Văn yku",
    gender: "nam",
    age: 27,
    diemToan: 3,
    diemVan: 3,
    diemAnh: 1,
    languages: ["KR", "CN", "FR", "EN", "JP"],
  },
  {
    id: "39uo7a8m",
    name: "Nguyễn Văn nnj",
    gender: "nam",
    age: 31,
    diemToan: 10,
    diemVan: 5,
    diemAnh: 6,
    languages: ["VI", "JP", "EN"],
  },
  {
    id: "5g6bdkcn",
    name: "Nguyễn Văn s7s",
    gender: "nam",
    age: 35,
    diemToan: 4,
    diemVan: 9,
    diemAnh: 3,
    languages: ["VI", "JP", "EN", "KR", "CN"],
  },
  {
    id: "y80dazrj",
    name: "Nguyễn Văn m8k",
    gender: "nam",
    age: 21,
    diemToan: 10,
    diemVan: 5,
    diemAnh: 9,
    languages: ["FR", "JP"],
  },
];

//câu 1 :in ra màn hình danh sách các học viên theo template  `Họ tên - tuổi -giới tính - điểm trung bình TVA`
// data.map((item) => {
//   const diemTB = (item.diemAnh + item.diemToan + item.diemVan) / 3;
//   const dsachSV = `${item.name} - ${item.age} -${item.gender}- ${diemTB.toFixed(
//     2
//   )}`;
//   console.log(dsachSV);
// });

function dsSVien(arr) {
  for (let i in arr) {
    const diemTb = (arr[i].diemAnh + arr[i].diemToan + arr[i].diemVan) / 3;
    console.log(
      `Tên: ${arr[i].name} - Tuổi:  ${arr[i].age} -Giới tính: ${
        arr[i].gender
      } - Điểm trung bình: ${diemTb.toFixed(2)} `
    );
  }
}
dsSVien(data);
//=======
//Câu 2:In ra màn hình sinh viên có học lực > 6 . Tìm người có điểm cao nhất, 2 người thấp nhất trong danh sách tìm được
// console.log("======== Danh sách sinh viên có điểm trung bình > 6 ========");
// const dsDiemTB = [];
// data.map((item) => {
//   const diemTB = (item.diemAnh + item.diemToan + item.diemVan) / 3;
//   if (diemTB > 6 && item.gender === "nam") {
//     dsDiemTB.push({ ...item, diemTB });
//     console.log(
//       `Tên: ${item.name} - Tuổi:${item.age} - Điểm trung bình: ${diemTB}`
//     );
//   }
// });
// console.log("====Người có điểm trung bình cao nhất====");
// const tbMax = [];
// for (let i = 0; i < dsDiemTB.length; i++) {
//   tbMax.push(dsDiemTB[i].diemTB);
// }
// const maxScore = Math.max(...tbMax);
// const svMax = dsDiemTB.find((sv) => sv.diemTB === maxScore);
// console.log(
//   `Tên: ${svMax.name} - Tuổi:${svMax.age} - Điểm trung bình: ${svMax.diemTB}`
// );
// console.log("====2 người có điểm trung bình thấp nhất nhất====");
// const tbMin = [...dsDiemTB];
// const svMin = tbMin.sort((a, b) => a.diemTB - b.diemTB).slice(0, 2);
// svMin.map((sv) => {
//   console.log(
//     `Tên: ${sv.name} - Tuổi:${sv.age} - Điểm trung bình: ${sv.diemTB}`
//   );
// });
//====

//Câu 3: Thống kê xem có bao nhiêu học sinh nữ biết 2 thứ tiếng, sắp xếp theo thứ tự giảm dần theo học lực của sinh viên nữ đó

const svNu = [];
function dsSVienNu(arr) {
  for (let i in arr) {
    if (arr[i].gender === "nữ" && arr[i].languages.length === 2) {
      svNu.push(arr[i]);
    }
  }
  console.log(`Có ${svNu.length} sinh viên Nữ biết 2 thứ tiếng`);

  // Tính điểm trung bình của sinh viên nữ đó và sắp xếp giảm dần
  const dsSVNu = [];
  svNu.map((item) => {
    const diemTBSVNu = (item.diemAnh + item.diemToan + item.diemVan) / 3;
    dsSVNu.push({ ...item, diemTBSVNu });
  });
  const sortedSVNu = dsSVNu.sort((a, b) => {
    return b.diemTBSVNu - a.diemTBSVNu;
  });
  console.log(
    "====Danh sách sắp xếp giảm dần của sinh viên nữ có 2 thứ tiếng===="
  );
  console.log(sortedSVNu);
}
dsSVienNu(data);

///Câu 4: In ra thống kê trong list các ngôn ngữ
// function dsNgonNgu(arr) {
//   const counts = {};

//   for (let i = 0; i < arr.length; i++) {
//     const languages = arr[i].languages;

//     for (let j = 0; j < languages.length; j++) {
//       const lang = languages[j];
//       if (counts[lang] === undefined) {
//         counts[lang] = 0;
//       }
//       counts[lang]++;
//     }
//   }

//   console.log(counts);
//   console.log("VI có", counts["VI"], "sinh viên");
//   console.log("JP có", counts["JP"], "sinh viên");
//   console.log("EN có", counts["EN"], "sinh viên");
//   console.log("KR có", counts["KR"], "sinh viên");
//   console.log("FR có", counts["FR"], "sinh viên");
//   console.log("CN có", counts["CN"], "sinh viên");
// }

// dsNgonNgu(data);
