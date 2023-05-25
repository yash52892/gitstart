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
    li.textContent=txt;
    let btn=document.createElement('input');
    btn.type="button";
    btn.value="Delete"; 
    btn.onclick=function del(){
        localStorage.removeItem(obj.oemail);
        p.removeChild(li);
    }
    li.appendChild(btn);
    p.appendChild(li);
    //let data=document.getElementsByClassName('list');
   // data.append-btn(btn);
}
