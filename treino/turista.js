const nam = prompt("Enter your name: ")
let cites = ""
let score = 0

let keep = prompt("Have you ever visited any city? Yes/No").toUpperCase()

while (keep === "YES" || keep === "Y" ){
    let city = prompt("Which city have you visited?")
    cites += " - " + city + "\n"
    score ++
    keep = prompt("Have you visited any other cities?")
}

alert(
    "Turist: " + nam +
    "\nVisted: "+ score + " Cities" +
    "\n Cities visited" + cites
)