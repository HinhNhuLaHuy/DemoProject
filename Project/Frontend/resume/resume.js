function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "E.g: Graduated from International University with excellent degree");

    let weOb = document.getElementById("aq");
    let addButtonOb = document.getElementById("aqAddButton");

    weOb.insertBefore(newNode, addButtonOb);

}
function addNewWEField(){
    console.log("Adding new field");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "E.g: Used to work at Google for 3 years");

    let weOb = document.getElementById("we");
    let addButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, addButtonOb);

}

function generateCV(){
    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT")

    nameT1.innerHTML = nameField;
 
    document.getElementById("genderT").innerHTML = document.getElementById("genderField").value;
 
    document.getElementById("birthDayT").innerHTML = document.getElementById("birthDayField").value;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("facebookT").innerHTML = " - " + document.getElementById("facebookField").value;

    document.getElementById("instagramT").innerHTML = " - " +  document.getElementById("instagramField").value;

    document.getElementById("githubT").innerHTML = " - " + document.getElementById("githubField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    let aqs = document.getElementsByClassName("aqField");
    let str = "";

    for(let a of aqs){
        str = str + "<li> "  + a.value + "</li>";
    }
    document.getElementById("aqT").innerHTML = str;

    let wes = document.getElementsByClassName("weField");
    let str1 = "";

    for(let e of wes){
        str1 = str1 + "<li> "  + e.value + "</li>";
    }
    document.getElementById("weT").innerHTML = str1;

    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function printCV(){
    window.print();
}