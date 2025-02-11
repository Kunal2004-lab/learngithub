let h1 = document.createElement("h1");
console.log(h1);
h1.textContent = "hello Minh";
document.body.appendChild(h1);
h1.style.backgroundColor = "red";

let ol = document.createElement("ol");
console.log(ol);
let li1 = document.createElement("li");
console.log(li1);
li1.textContent = "react";
ol.appendChild(li1);

document.body.appendChild(ol);

let div = document.getElementById("Demo");
console.log(div);
div.style.border ="5px solid red"
div.appendChild(ol)

ol.setAttribute("type","A")
