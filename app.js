let students = [];

function Student(name, lastname, email, phone) {
  this.name = name;
  this.lastname = lastname;
  this.email = email;
  this.phone = phone;
  return this;
}

function addStudent() {
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (name == "" || lastname == "" || email == "" || phone == "") {
    document.getElementById("error").innerHTML = "Some fields are empty!";
  } else {
    let student = new Student(name, lastname, email, phone);
    students.push(student);
  }
  render();
}

function edit(index) {
  document.getElementById(`name_${index}`).disabled = false;
  document.getElementById(`lastname_${index}`).disabled = false;
  document.getElementById(`email_${index}`).disabled = false;
  document.getElementById(`phone_${index}`).disabled = false;

  document.getElementById(`edit_${index}`).outerHTML = `
    <td><button class="btn btn-success" onclick="save(${index})">Save</button>
    `;
}

function save(index){
    students[index].name = document.getElementById(`name_${index}`).value
    students[index].lastname = document.getElementById(`lastname_${index}`).value
    students[index].email = document.getElementById(`email_${index}`).value
    students[index].phone = document.getElementById(`phone_${index}`).value
    render()
}

function remove(index){
    students.splice(index, 1)
    render()
}



function render() {
  document.getElementById("tbody").innerHTML = "";
  students.map((student, index) => {
    document.getElementById("tbody").innerHTML += `
        <tr>
            <td><input id="name_${index}" type="text" disabled value="${student.name}"></td>
            <td><input id="lastname_${index}" type="text" disabled value="${student.lastname}"></td>
            <td><input id="email_${index}" type="text" disabled value="${student.email}"></td>
            <td><input id="phone_${index}" type="text" disabled value="${student.phone}"></td>
            <td><button class="btn btn-warning" id="edit_${index}" onclick="edit(${index})">Edit</button> <button class="btn btn-danger" onclick="remove(${index})">Delete</button></td>
        </tr>
        `;
  });
}
