
const libraryForm = document.getElementById("libraryForm");
const studentList = document.getElementById("studentList");

// LocalStorage se purana data lena
let students = JSON.parse(localStorage.getItem("students")) || [];

// Page open hone par students show karna
displayStudents();

libraryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const prn = document.getElementById("prn").value;

    const student = {
        name: name,
        department: department,
        prn: prn,
        entryTime: new Date().toISOString()
    };

    students.push(student);

    // Updated data LocalStorage mein save karna
    localStorage.setItem("students", JSON.stringify(students));

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
            <p>Entry Time: ${new Date(student.entryTime).toLocaleTimeString()}</p>
            <button onclick="exitLibrary(${index})">Exit Library</button>
            <hr>
        `;

        studentList.appendChild(studentCard);
    });
}

function exitLibrary(index) {

    const student = students[index];

    const exitTime = new Date();

    const duration = exitTime - new Date(student.entryTime);

    const totalMinutes = Math.floor(duration / (1000 * 60));

    const hours = Math.floor(totalMinutes / 60);

    const minutes = totalMinutes % 60;

    alert(
        student.name + " has exited the library.\n" +
        "Exit Time: " + exitTime.toLocaleTimeString() + "\n" +
        "Duration: " + hours + " hours " + minutes + " minutes"
    );

    students.splice(index, 1);

    // Exit ke baad updated data save karna
    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}
