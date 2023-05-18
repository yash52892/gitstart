var name1=document.getElementById('exampleInputname');
var email=document.getElementById('exampleInputemail');
var form=document.getElementById('form');

form.onsubmit=function myFunction(e){
    e.preventDefault();
    localStorage.setItem('name',name1.value);
    localStorage.setItem('email',email.value);
    console.log(localStorage.getItem('name'));
};
