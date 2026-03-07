import { handleInput } from "./Order.js";

class Chat extends HTMLElement {

  sendMessage(evt){
    evt.preventDefault();

    var msg = this.input.value;
    this.input.value = "";

    this.writeLine(msg);
  }

  writeLine(text){

    this.messages.insertAdjacentHTML(
      "beforeend",
      `<li class="message-item item-secondary">You say: ${text}</li>`
    );

    const responses = handleInput(text);

    for(let message of responses){

      this.messages.insertAdjacentHTML(
        "beforeend",
        `<li class="message-item item-primary">Bot says: ${message}</li>`
      );

    }

    this.messages.scrollTop = this.messages.scrollHeight;

  }

  connectedCallback(){

    this.innerHTML = `

    <style>

    ul{list-style:none;}

    .chat{
      width:400px;
      height:500px;
      background:white;
      border-radius:10px;
      padding:10px;
      box-shadow:0 0 10px rgba(0,0,0,0.2);
      position:fixed;
      bottom:80px;
      right:20px;
    }

    .message-list{
      height:380px;
      overflow-y:auto;
    }

    .message-item{
      padding:10px;
      margin:10px 0;
      border-radius:10px;
    }

    .item-primary{
      background:#f6f7f8;
    }

    .item-secondary{
      background:#5ccad7;
      color:white;
      text-align:right;
    }

    form{
      display:flex;
      margin-top:10px;
    }

    input{
      flex:1;
      padding:8px;
    }

    </style>

    <div class="chat">

      <ul class="message-list"></ul>

      <form>
        <input type="text" placeholder="Type message"/>
        <button type="submit">Send</button>
      </form>

    </div>
    `;

    this.input = this.querySelector("input");
    this.messages = this.querySelector(".message-list");

    this.querySelector("form")
      .addEventListener("submit", this.sendMessage.bind(this));

    const welcome = handleInput("");
    for(let msg of welcome){
      this.messages.insertAdjacentHTML(
        "beforeend",
        `<li class="message-item item-primary">Bot says: ${msg}</li>`
      );
    }

  }

}

customElements.define("x-chat", Chat);