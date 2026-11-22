
const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    // Create student card
    const student = document.createElement("div");

    const heading = document.createElement("h3");
    const emailText = document.createElement("p");
    const courseText = document.createElement("p");

    function displayDetails() {
        heading.textContent = nameInput.value;
        emailText.textContent = "Email: " + emailInput.value;
        courseText.textContent = "Course: " + courseInput.value;
    }

    // Create editable input fields
    const nameInput = document.createElement("input");
    nameInput.value = name;

    const emailInput = document.createElement("input");
    emailInput.value = email;

    const courseInput = document.createElement("input");
    courseInput.value = course;

    displayDetails();

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", function() {

        const newName = prompt("Enter new name:", nameInput.value);
        if (newName === null || newName.trim() === "") return;

        const newEmail = prompt("Enter new email:", emailInput.value);
        if (newEmail === null || newEmail.trim() === "") return;

        const newCourse = prompt("Enter new course:", courseInput.value);
        if (newCourse === null || newCourse.trim() === "") return;

        nameInput.value = newName;
        emailInput.value = newEmail;
        courseInput.value = newCourse;

        displayDetails();

    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
        student.remove();
    });

    student.appendChild(heading);
    student.appendChild(emailText);
    student.appendChild(courseText);
    student.appendChild(editBtn);
    student.appendChild(deleteBtn);

    studentList.appendChild(student);

    form.reset();

});
