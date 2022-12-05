var numberOfDrumbButtons = document.querySelectorAll(".drum").length;

// console.log(numberOfDrumbButtons)


for (let x = 0; x < numberOfDrumbButtons; x++) {
    document.querySelectorAll(".drum")[x].addEventListener("click", function () {
        alert("I got clicked")
    })

}