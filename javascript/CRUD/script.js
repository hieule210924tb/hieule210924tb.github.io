var input_id = document.getElementById("input_id");
var input_name = document.getElementById("input_name");
var input_gender = document.getElementById("input_gender");
var input_math = document.getElementById("input_math");
var input_english = document.getElementById("input_english");
var input_literature = document.getElementById("input_literature");

let listStudent = JSON.parse(localStorage.getItem("key")) || [];

const addStudent = () => {
  const itemStudent = {
    id: input_id.value,
    name: input_name.value,
    gender: input_gender.value,
    math: +input_math.value,
    english: +input_english.value,
    literature: +input_literature.value,
  };
  let index = listStudent.findIndex((c) => c.id == itemStudent.id);

  if (index !== -1) {
    listStudent[index] = itemStudent;
    document.getElementById("button_student").innerHTML = "Create student";
  } else {
    listStudent.push(itemStudent);
  }
  renderStudent();
  saveStorage();
  clearInput();
};
const clearInput = () => {
  input_id.value = "";
  input_name.value = "";
  input_gender.value = "";
  input_math.value = "";
  input_english.value = "";
  input_literature.value = "";
};
(renderStudent = () => {
  table = ` <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Math</th>
                <th scope="col">English</th>
                <th scope="col">Literature</th>
                <th scope="col">Average score</th>
                <th scope="col">Action</th>
               </tr>
            `;
  listStudent.map((item, index) => {
    const avgScore = (item.math + item.english + item.literature) / 3;
    return (table += `
              <tbody>
           <tr>
                <th scope="row">${item.id}</th>
                <td>${item.name}</td>
                <td>${item.gender}</td>
                <td>${item.math}</td>
                <td>${item.english}</td>
                <td>${item.literature}</td>
                <td>${avgScore.toFixed(2)}</td>
                <td>
                    <button type="button" class="btn btn-success" onclick="updateItem(${index})">Update</button>
                    <button type="button" class="btn btn-danger" onclick="deleteItem(${index})">Delete</button>
                </td>
             </tr>
          </tbody>
        `);
  });
  document.getElementById("table").innerHTML = table;
})();
const saveStorage = () => {
  localStorage.setItem("key", JSON.stringify(listStudent));
};
const deleteItem = (index) => {
  listStudent.splice(index, 1);
  renderStudent();
  saveStorage();
};
const updateItem = (index) => {
  const student = listStudent[index];
  input_id.value = student.id;
  input_name.value = student.name;
  input_gender.value = student.gender;
  input_math.value = student.math;
  input_english.value = student.english;
  input_literature.value = student.literature;
  document.getElementById("button_student").innerHTML = "Update student";
  input_id.style.display = "none";
};
const search = (student) => {
  var searchInput = document
    .getElementById("search")
    .value.trim()
    .toLowerCase();
  if (searchInput == "") {
    alert("Vui lòng nhập từ khóa để tìm kiếm");
  } else {
    const item = student.filter((item) =>
      item.name.toLowerCase().includes(searchInput)
    );
    if (item.length === 0) {
      document.getElementById(
        "table"
      ).innerHTML = `<p>Không tìm thấy kết quả</p>`;
    } else {
      table = ` <tr>
                 <th scope="col">ID</th>
                 <th scope="col">Name</th>
                 <th scope="col">Gender</th>
                 <th scope="col">Math</th>
                 <th scope="col">English</th>
                 <th scope="col">Literature</th>
                 <th scope="col">Average score</th>
                </tr>
             `;
      item.map((item) => {
        const avgScore = (item.english + item.math + item.literature) / 3;
        return (table += `
          <tbody>
            <tr>
                 <th scope="row">${item.id}</th>
                 <td>${item.name}</td>
                 <td>${item.gender}</td>
                 <td>${item.math}</td>
                 <td>${item.english}</td>
                 <td>${item.literature}</td>
                 <td>${avgScore.toFixed(2)}</td>
              </tr>
           </tbody>`);
      });
      document.getElementById("table").innerHTML = table;
      document.getElementById("search").value = "";
    }
  }
};
