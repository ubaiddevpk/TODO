
let store=[
  {
    item: "",
    date: ""
  },
];

function add(){
  var todoelement = document.getElementById("todoinput");
  let todoitem=todoelement.value;
  var dateelement = document.getElementById("tododate");
  let dateitem=dateelement.value
  store.push({item: todoitem, date: dateitem});
todoelement.value="";
dateelement.value="";
display();
}

function display(){
  var list = document.getElementById("todoList");
   let newhtml='';
  for (var i = 0; i < store.length; i++) {
    let {item,date}=store[i];
    if(item!=""&&date!=""){
    newhtml += `
    <span class="span">${item}</span>
    <span class="span">${date}</span>
    <button class='btn-delete span' onclick="store.splice(${i}, 1);
    display();">Delete</button>
  `;}
  else{
     document.getElementById('tododate').style.borderColor="red"
     document.getElementById("todoinput").style.borderColor="red";
  }}
  list.innerHTML=newhtml;
  }

 






