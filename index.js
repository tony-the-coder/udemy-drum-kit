var numberOfDrumbButtons = document.querySelectorAll(".drum").length;

// console.log(numberOfDrumbButtons)

// var audio = new Audio('./sounds/tom-1.mp3')

for (let x = 0; x < numberOfDrumbButtons; x++) {
    document.querySelectorAll(".drum")[x].addEventListener("click", function () {
        var audio = new Audio('./sounds/tom-1.mp3')
        audio.play();
    })


}

