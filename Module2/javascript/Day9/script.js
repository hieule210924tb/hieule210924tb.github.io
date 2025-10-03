var inputJob = document.getElementById("input_job");
var list_Job = document.getElementById("list_item");

let listJob = JSON.parse(localStorage.getItem("jobs")) || [];
const addJob = () => {
  if (inputJob.value.trim() !== "") {
    listJob.push(inputJob.value);
    inputJob.value = "";
    render();
    save();
  }
};
(render = () => {
  listJob.innerHTML = " ";
  const ulItem = listJob.map((item, index) => {
    return `<li>${item} <p onclick="deleteJob(${index})">X</p> </li>`;
  });
  list_Job.innerHTML = ulItem.join("");
})();
const save = () => {
  localStorage.setItem("jobs", JSON.stringify(listJob));
};
const deleteJob = (index) => {
  listJob.splice(index, 1);
  render();
  save();
};

const deleteAll = () => {
  localStorage.clear(listJob);
  render();
  list_Job.innerHTML = [];
};
