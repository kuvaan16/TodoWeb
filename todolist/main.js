var inputItem = document.getElementById("inputItem");
inputItem.focus();

function addItem(list, input){
    var inputItem = this.inputItem;
    var list = document.getElementById(list);
    var listItem = document.createElement("div");
    listItem.className = "data";

    var p = document.createElement("p");
    p.innerText = input.value;
    p.className = "work-name";

    var hr = document.createElement("hr");
    hr.className = "hr";

    var deleteButton = document.createElement("i");
    deleteButton.className = "fa-solid fa-trash-can icon";
    deleteButton.addEventListener("click", function(){
        listItem.remove();
        hr.remove();
    });
    
    var doneButton = document.createElement("i");
    doneButton.className = "fa-solid fa-check icon";
    doneButton.addEventListener("click", function(){
        p.style.textDecoration = 'line-through';
    });

    listItem.appendChild(p);
    listItem.appendChild(deleteButton);
    listItem.appendChild(doneButton);

    list.appendChild(listItem);
    list.appendChild(hr);
    inputItem.focus();
    inputItem.select();
    return false;

}