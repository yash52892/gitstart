var _name=document.getElementById('names');
var _email=document.getElementById('email');
var _phone=document.getElementById('phone');
var form=document.getElementById('form');
var p=document.getElementById('para');

form.onsubmit=function add_details(e){
    e.preventDefault();
    var obj={
        oname:_name.value, oemail:_email.value, ophone:_phone.value
    }
    localStorage.setItem(obj.oemail,JSON.stringify(obj));
    let newObject = JSON.parse(localStorage.getItem(obj.oemail));
    let txt=obj.oname+"-"+obj.oemail+"-"+obj.ophone;
    let li=document.createElement('li');
    let t=document.createTextNode(txt);
    li.appendChild(t);
    p.appendChild(li);
}
