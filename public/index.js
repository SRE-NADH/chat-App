var socket = io();
const joinbutton = document.querySelector("form>button");
const login_form= document.getElementsByClassName("login")[0];
const userInput = document.querySelector("form>input");
const heading = document.querySelector(".head>h1");

const type_box = document.getElementsByClassName("type-box")[0];
const chat_body = document.getElementsByClassName("chatbody")[0];

let username;

login_form.addEventListener("submit",JoinClassroom);

function JoinClassroom(e){
   e.preventDefault();
   username=userInput.value;
   heading.innerText = "Chat-Room";
   login_form.style.display="none";
   chat_body.style.display="flex";
   type_box.style.display="block";
   console.log(username);
}

const sentButton = document.querySelector(".type-box>button");
const messageInput = document.querySelector(".type-box>input");

sentButton.addEventListener("click",addMessage);

function addMessage(){
   let message = messageInput.value;
   if(message==="") return;
   messageInput.value="";

   let data= {
      id:socket.id,
      Username:username,
      Message:message
   }

   socket.emit("secret message",data);
   appendMessage(data,"message");
}

function appendMessage(data,type){
   let div = document.createElement("div");
   div.className=type;
   div.innerHTML=`<span>${data.Username}</span>${data.Message}`;
  chat_body.append(div);
}

socket.on("secret message",(data)=>{
   if(data.id!==socket.id){
    appendMessage(data,"message sent");
   }
})

{/* <div class="message"><span>username</span>hello</div> */}

