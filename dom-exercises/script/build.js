let existingElement = document.getElementsByTagName("body")[0];
let div = document.createElement("div");
div.setAttribute("id", "firsth1");
let minbild = document.createElement("img");
minbild.setAttribute("src", "../images/winter-3112188_640.jpg");
minbild.setAttribute("width", "50%");
minbild.setAttribute("title", "cykel");
minbild.setAttribute("alt", "cykel");
existingElement.appendChild(div);
existingElement.appendChild(minbild);

document.getElementById("firsth1").innerHTML = "<h1>Cykel</h1> <p>Detta är en bild på en cykel</p>";


