var name1=document.getElementById('exampleInputname');
var email=document.getElementById('exampleInputemail');
var form=document.getElementById('form');

form.onsubmit=function myFunction(e){
    e.preventDefault();
    let n=name1.value;
    let ema=email.value;
    let obj={
        n,ema
    };

    axios.post("https://crudcrud.com/api/6eb95dbbe7a945e19c04d39db4f5a954/appointmentdata", obj)
    .then((res)=>{
        document.getElementById("p").innerHTML=(res);
    })
    .catch((err)=>{
        document.getElementById("p").innerHTML="something went wrong"; 
    })
};