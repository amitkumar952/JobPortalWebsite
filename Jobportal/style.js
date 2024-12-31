console.log("hello")
let navbar=document.querySelector(".header .flex .navbar");
document.querySelector('.main-btn').onclick=()=>{
    navbar.classList.toggle('active')
}







let dropdown_item=document.querySelectorAll(".job-fillter form .dropDown-container .dropdown .list .items");
for(let items of dropdown_item){
    items.onclick=(()=>{
        items_parent=items.parentElement.parentElement;
        let output=items_parent.querySelector('.output');
        output.value=items.innerText;

    })
}












console.log("helo")
let signinbtn=document.getElementById('signIn')
let signupbtn=document.getElementById('signUp')
let titlebtn=document.getElementById('title')
let name1=document.getElementById('nameFiled')
let forget=document.getElementsByClassName("forget-password")
let hh=document.getElementsByClassName("form-box")
signupbtn.onclick=(()=>{
    name1.style.maxHeight="0"
    titlebtn.innerHTML="sign Up"
    signinbtn.classList.add("disable")
    signupbtn.classList.remove("disable")
})

signinbtn.onclick=(()=>{
    name1.style.maxHeight="60px"
    titlebtn.innerHTML="sign In"
    signinbtn.classList.remove("disable")
    signupbtn.classList.add("disable")
})
forget.addEventListener("click",element=>{
    alert("welcome to the prabhat home page==")
    document.body.style.backgroundColor = "red";
})

