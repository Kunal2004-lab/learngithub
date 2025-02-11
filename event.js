// let btn = document.getElementById("demo");
// console.log(btn);
// btn.onclick = function() {
//     let res = Math.round(Math.random() * 10000).toString(16);
//     console.log(res);
//     document.body.style.backgroundColor = `#${res}`;
// }

// let btn1 = document.getElementById("demo1");
// console.log(btn1);
// let color = window.prompt("enter color name ");  // Commented out
// console.log(color);  // Commented out
// btn1.innerHTML = "Clickme";  // Set the default innerHTML

// btn1.onmouseover = () => {
//     document.body.style.backgroundColor = `${color}`;  // Commented out
//     document.body.style.transitionDuration = "3s";
//     btn1.style.backgroundColor = `${color}`;  // Commented out
// }

let input = document.getElementById("demo2");
console.log(input);
input.addEventListener("keydown", () => {
    let res = Math.floor(Math.random() * 16777215).toString(16); // Generates a valid 6-character hex color code
    console.log(res);
    document.body.style.backgroundColor = `#${res}`;
});

let videoElement = document.getElementById("videoElement");

btn.onclick = function() {
    if (videoElement.paused) {
        videoElement.play();
    } else {
        videoElement.pause();
    }
}
