let events=[];
let editIndex=-1;
let input=document.getElementById("eventInput");
let list=document.getElementById("eventList");
let message=document.getElementById("message"),button=document.getElementById("eventButton");
button.onclick=function(){
let name=input.value.trim();
if(name==""){message.innerHTML="Please enter event name";return;}
if(editIndex==-1){events.push(name);}
else{events[editIndex]=name;editIndex=-1;button.innerHTML="Add Event";}
input.value="";
message.innerHTML="";
showEvents();
}
function showEvents(){
list.innerHTML="";
for(let i=0;i<events.length;i++)list.innerHTML+=`<li>${events[i]} <button onclick="editEvent(${i})">Edit</button> <button onclick="deleteEvent(${i})">Delete</button></li>`;
}
function editEvent(i){input.value=events[i];editIndex=i;button.innerHTML="Update Event";}
function deleteEvent(i){events.splice(i,1);showEvents();}
