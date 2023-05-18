var obj={
    o_name:'yash',age:29
}
localStorage.setItem('_obj',JSON.stringify(obj));
let re_obj=JSON.parse(localStorage.getItem('_obj'));
console.log(re_obj);