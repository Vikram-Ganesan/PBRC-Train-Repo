const signinToggle=document.getElementById("signbtn");
const signinForm=document.querySelectorAll(".signform");
const signupform= document.querySelectorAll(".hideForm");
const signupToggle=document.getElementById("signUp");
signinForm.forEach((hide)=>{hide.style.visibility="hidden"});
signinToggle.addEventListener("click", ()=>{
    signinForm.forEach((show)=>{show.style.visibility="visible"});
    signupform.forEach((hide)=>{hide.style.visibility="hidden"});

})
signupToggle.addEventListener("click", ()=>{
    console.log(signupToggle);
    signupform.forEach((show)=>{show.style.visibility="visible"});
    signinForm.forEach((hide)=>{hide.style.visibility="hidden"});

})


