function addNewAQField(){
    console.log("Adding new field");

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
