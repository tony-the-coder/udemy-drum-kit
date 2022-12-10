//Listening for the button to be pressed

var numberOfDrumbButtons = document.querySelectorAll(".drum").length;


for (let x = 0; x < numberOfDrumbButtons; x++) {
    document.querySelectorAll(".drum")[x].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)

    });


}

//Listening for Keyboard press

document.addEventListener("keydown", function (event) {

    makeSound(event.key)
    buttonAnimation(event.key)
})

//Playing the sounds for keydown and click


function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(buttonInnerHTML)

    }

}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed")

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}




















// audio.play();

//Object review

// function HouseKeeper(name, yearsOfExperience, prefererence, languages) {
//     this.name = name,
//         this.yearsOfExperience = yearsOfExperience,
//         this.prefererence = prefererence,
//         this.languages = languages,
//         this.clean = function () {
//             alert("What do I clean")
//         }

// }

// var HouseKeeper1 = new HouseKeeper("Jane", 1, ["rooms", "windows"], ["French", "English"])

// console.log(HouseKeeper1.name)
// console.log(HouseKeeper1.prefererence)

// End of Object review