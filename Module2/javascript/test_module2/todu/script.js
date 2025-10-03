const tabBtns = document.querySelectorAll(".tab-btn");
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let listTask = JSON.parse(localStorage.getItem("keys")) || [];
let filter = "all";

//  đổi tab
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.dataset.filter;
    renderListTask();
  });
});

// Thêm công việc
const addTask = () => {
  if (taskInput.value.trim() === "") {
    alert("Vui lòng điền thông tin");
  } else {
    listTask.push({ text: taskInput.value.trim(), completed: false });
  }
  renderListTask();
  saveStorage();
  taskInput.value = "";
};

//  Render danh sách
(renderListTask = () => {
  taskList.innerHTML = "";

  let filteredTasks = listTask.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  filteredTasks.forEach((task) => {
    const realIndex = listTask.indexOf(task);
    const li = document.createElement("li");
    li.className =
      "task-item d-flex justify-content-between align-items-center";

    li.innerHTML = `
      <div>
        <input type="checkbox" class="form-check-input me-2"
          ${task.completed ? "checked" : ""}
          onchange="toggleTask(${realIndex})" />
        <span style="text-decoration:${
          task.completed ? "line-through" : "none"
        }">
          ${task.text}
        </span>
      </div>
      ${
        filter === "completed"
          ? `<button class="delete-btn btn btn-danger btn-sm" onclick="deleteTask(${realIndex})">🗑</button>`
          : ""
      }
    `;
    taskList.appendChild(li);
  });

  //  Hiển thị hoặc ẩn nút Clear Completed
  const clearWrapper = document.getElementById("clearWrapper");
  clearWrapper.innerHTML = "";
  if (filter === "completed" && listTask.some((task) => task.completed)) {
    clearWrapper.innerHTML = `
      <button class="btn btn-danger btn-sm" onclick="clearCompleted()">
        Clear Completed
      </button>
    `;
  }
})();

//  Lưu localStorage
const saveStorage = () => {
  localStorage.setItem("keys", JSON.stringify(listTask));
};

//  Toggle hoàn thành
const toggleTask = (index) => {
  listTask[index].completed = !listTask[index].completed;
  saveStorage();
  renderListTask();
};

// Xóa task
const deleteTask = (index) => {
  listTask.splice(index, 1);
  saveStorage();
  renderListTask();
};
const clearCompleted = () => {
  listTask = listTask.filter((task) => !task.completed);
  saveStorage();
  renderListTask();
};
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
