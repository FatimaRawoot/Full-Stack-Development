const libraryForm = document.getElementById("libraryForm");
const studentList = document.getElementById("studentList");

libraryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const prn = document.getElementById("prn").value;

    const student = {
        name: name,
        department: department,
        prn: prn
    };

    const studentCard = document.createElement("div");

    studentCard.innerHTML = `
        <h3>${student.name}</h3>
        <p>Department: ${student.department}</p>
        <p>PRN: ${student.prn}</p>
    `;

    studentList.innerHTML = "";

    studentList.appendChild(studentCard);

    libraryForm.reset();
});