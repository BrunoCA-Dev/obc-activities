//Array that stores the job positions
const jobsPosition = []

//
function index (){
    let indexMessage ="Wich job position do you want to select?\n\n" 
    jobsPosition.forEach((position,index) => {
        indexMessage += index + "-" + position.name + "\n"
    })
    return prompt (indexMessage)
}

function jobList (){

}

//Function that creates a new job position as an object and adds it to the jobPosition array'ss
function jobNew (){
    let newJob = {}
    newJob.name = prompt("Job name")
    newJob.description = prompt("Job description")
    newJob.limit = prompt("Job limit date")

    if (confirm(
        "Job name: " + newJob.name +
        "\nJob description: " + newJob.description +
        "\nJob limit date: " + newJob.limit + 
        "\n\nDo you confirm the job informations?"
    ) == true) {
        jobsPosition.push(newJob)
    } else {
        alert ("Operation Canceled")
    }
}

function jobView (){

}

function jobApply (){
    let option = index()

    let applicant = {}
    applicant.name = prompt("What is the applicant name?")

    if (confirm(
        "Job name: " + jobsPosition[option].name +
        "\nApplicant: " + applicant.name
    ) == true) {
        jobsPosition[option].applicant = applicant
    } else {
        alert("Application canceled?")
    }
}
function jobDelete (){

}

do {

    option = ""
    option = prompt (
        "Chose an option: " + 
        "\n\n1) Show all job offers" +
        "\n2) Add a new job offer" +
        "\n3) Check a job offer" +
        "\n4) Add a candidate to a job offer" +
        "\n5) Delete a job offer" +
        "\n6) Exit"
    )

    switch(option){
        case("2"):
        jobNew ()
        break
    }
    switch(option){
        case("4"):
        jobApply ()
        break
    }
  
} while (option !=="6")

//aditional status by default at indexe
