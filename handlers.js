const canvas = document.getElementById("form_result")

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


    canvas.height = canvas.width / 1.616;

    const logo = document.getElementById("school_logo")
    const studentImage = document.getElementById("studentImage")


    drawCanvas(canvas, name.innerHTML, birthDate.innerHTML, yearOfSturdy.innerHTML, logo, studentImage)
})

function loadStudentImage(event) {
    const imageDisplay = document.getElementById("studentImage")
    imageDisplay.src = URL.createObjectURL(event.target.files[0])
}

const download = document.getElementById("download")
download.addEventListener(
    "click", () => {

        const canvas = document.getElementById("form_result")
        // const content = URL.createObjectURL(canvas)
        // canvas.toBlob(
        //     blob => {
        //         const url = URL.createObjectURL(blob)
        //         console.log(url)
        //     }
        // )

        const fullQuality = canvas.toDataURL('image/jpeg', 1.0);
        console.log(fullQuality)

        // content.download = "Id-Card.png"
        console.log(content)
        // if (window.navigator.msSaveBlob) {
        //     console.log("Saving....")
        //     window.navigator.msSaveBlob(canvas.msSaveBlob(), "Id-Card.png")
        // } else {
        //     console.log("not saving....")
        //     const anchorTag = document.createElement('a')

        //     document.body.appendChild(anchorTag)
        //     anchorTag.href = canvas.toDataURL()

        //     anchorTag.click()
        //     document.body.removeChild(anchorTag)
        // }
    }
)

function drawCanvas(canvas, name, birth, fieldYear, logo, image) {
    const canvasContext = canvas.getContext("2d")
    canvasContext.font = "20px Helvetica"
    canvasContext.fillStyle = "#159";
    canvasContext.rect(0, 0, 300, 56);
    canvasContext.fill();
    canvasContext.fillStyle = "#fff";

    canvasContext.fillText("Campus Card", 10, 25);
    canvasContext.font = "16px Arial";

    canvasContext.fillText("Undergraduate", 15, 45);
    canvasContext.drawImage(logo, 230, 3, 50, 50);

    canvasContext.fillStyle = "#000";
    canvasContext.fillText(name, 110, 90);
    canvasContext.fillText(birth, 110, 115);
    canvasContext.fillText(fieldYear, 110, 140);
    // ctx.fillText("SubN° " + num.innerHTML, 110, 165);
    canvasContext.drawImage(image, 10, 65, 80, 110);
}

