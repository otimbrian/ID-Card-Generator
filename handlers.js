



const previewButton = document.getElementById("preview_button")

previewButton.addEventListener("click", () => {
    const inputName = document.getElementById("iputName").value
    const inputDateOfBirth = document.getElementById("inputDOB").value
    const inputFaculty = document.getElementById("inputFaculty").value
    const inputYearOfStudy = document.getElementById("inputYOS").value


    const name = document.getElementById("name")
    const birthDate = document.getElementById('birth_date')
    const yearOfSturdy = document.getElementById("year_of_sturdy")
    const faculty = document.getElementById("faculty")

    name.innerHTML = inputName
    birthDate.innerHTML = inputDateOfBirth
    yearOfSturdy.innerHTML = inputYearOfStudy
    faculty.innerHTML = inputFaculty
})

function loadStudentImage(event){
    
}


