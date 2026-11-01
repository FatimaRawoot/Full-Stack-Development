const libraryForm = document.getElementById("libraryForm");
const studentList = document.getElementById("studentList");

let students = [];

libraryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const prn = document.getElementById("prn").value;

    const student = {
        name: name,
        department: department,
        prn: prn,
        entryTime: new Date()
    };

    students.push(student);

    displayStudents();

    libraryForm.reset();
});

function displayStudents() {

    studentList.innerHTML = "";

    students.forEach(function (student, index) {

        const studentCard = document.createElement("div");

        studentCard.innerHTML = `
            <h3>${student.name}</h3>
            <p>Department: ${student.department}</p>
            <p>PRN: ${student.prn}</p>
            <p>Entry Time: ${student.entryTime.toLocaleTimeString()}</p>
            <button onclick="exitLibrary(${index})">Exit Library</button>
            <hr>
        `;

        studentList.appendChild(studentCard);

    });
}

function exitLibrary(index) {

    const student = students[index];

    const exitTime = new Date();

    const duration = exitTime - student.entryTime;

    const totalMinutes = Math.floor(duration / (1000 * 60));

    const hours = Math.floor(totalMinutes / 60);

    const minutes = totalMinutes % 60;

    alert(
        student.name + " has exited the library.\n" +
        "Exit Time: " + exitTime.toLocaleTimeString() + "\n" +
        "Duration: " + hours + " hours " + minutes + " minutes"
    );

    students.splice(index, 1);

    displayStudents();
}