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
    let edt=document.createElement('input');
    btn.type="button";
    btn.value="Delete"; 
    edt.type="button";
    edt.value="Edit";
    edt.onclick=function data_edit(){
        let n=document.getElementById('names');
        let e=document.getElementById('email');
        let ph=document.getElementById('phone');
        n.value=obj.oname;
        e.value=obj.oemail;
        ph.value=obj.ophone;
        localStorage.removeItem(obj.oemail);
        p.removeChild(li);
        n.focus();
    }
    btn.onclick=function del(){
        localStorage.removeItem(obj.oemail);
        p.removeChild(li);
    }
    li.appendChild(btn);
    li.appendChild(edt);
    p.appendChild(li);
    //let data=document.getElementsByClassName('list');
   // data.append-btn(btn);
}
