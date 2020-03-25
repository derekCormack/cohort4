const text = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");
const userList = document.querySelectorAll(".name-list li");
const listInput = document.querySelector(".list-input");



// text.style.backgroundColor = "red";

text.classList.add('.change');

for (user of userList){
    user.addEventListener("click", function() {
        console.log(this);
    });
}