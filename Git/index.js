var itemList = document.getElementById('items');
var filt=document.getElementById('filter');
var form=document.getElementById('addf');
form.addEventListener('submit', additem);
itemList.addEventListener('click', removeItem);
var text=document.getElementById(filt);
filt.addEventListener('keyup',filter_items);
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
function additem(e){
  e.preventDefault();
  var item= document.getElementById('item').value;
var desc= document.getElementById('desc').value;
  var li=document.createElement('li');
  var btn=document.createElement('button');
  var edit=document.createElement('button');
  btn.appendChild(document.createTextNode("X"));
  edit.appendChild(document.createTextNode("Edit"));
  li.className="list-group-item";
  btn.className="btn btn-danger btn-sm float-right delete";
  edit.className="btn btn-info btn-sm float-right"; 
  li.appendChild(document.createTextNode(item));
  itemList.appendChild(li);
  li.appendChild(edit);
  li.appendChild(btn);
}


function filter_items(e){
var text=e.target.value.toLowerCase();
var items=itemList.getElementsByTagName('li');
Array.from(items).forEach(function(item){
  var itemName= item.firstChild.textContent;
  if(itemName.toLocaleLowerCase().indexOf(text)!= -1){
    item.style.display='block';
  }
  else{
    item.style.display='None';
  }
})
}