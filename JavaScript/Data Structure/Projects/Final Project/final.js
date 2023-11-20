const JobPositionArray = []

function listJobPosition (){

}

function newJobPosition (){
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
        JobPositionArray.push(newJob)
    } else {
        alert ("Operation canceled")
    }
}

function viewJobPosition (){

}

function applyJobPosition (){
    let index = (i)

}

function deleteJobPosition (){

}

do {

    option = ""
    option = prompt (
        "Chose an option: " + 
        "\n1) Show all job offers" +
        "\n2) Add a new job offer" +
        "\n3) Check a job offer" +
        "\n4) Add a candidate to a job offer" +
        "\n5) Delete a job offer" +
        "\n6) Exit"
    )

    switch(option){
        case("2"):
        newJobPosition ()
        break
    }
  
} while (option !=="6")
