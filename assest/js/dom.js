greetMe=document.getElementById("greetMe")
greetMe.addEventListener("click",() => {
    let name=document.getElementById("nameInput").value;
    if(name){
        document.getElementById("title").innerText="Hello, "+name+"!"
    }else{
        alert("Please enter the name")
    }
});
let isBlue=false;
toggleBackground=document.getElementById("toggleBackground")
togglrBackground.addEventListener("click",() => {
    if(isBlue){
        document.body.style.backgroundColor="white";

    }else{
        document.body.style.backgroundColor="pink";
        isBlue=true;
    }
});