//map and filter

function testers(){
    parent = document.getElementById("parent");
    child_z = document.getElementById("child-zero");

    console.log(parent.children[0] === child_z);
}




window.onload  = function() {
    rootdiv = document.getElementById("root");
    input = rootdiv.querySelectorAll("input");
   
    input = documnet.querySelectorAll("#root input");

//java script auto complete function...vs code....search.

    checked_checkboxes = input.filter((x) => x.type === "checkbox" && x.checked);//input filter to extract elements and insert into array.
    console.log(checked_checkboxes);

    input_texts = input.filter((x) => x.type === "text" || x,type=== "textarea");

    // lots of comments when using map/filter, etc.
    value_of_texts = input_texts.map((one_ele) => one_ele.value);
    
    testers();
}


