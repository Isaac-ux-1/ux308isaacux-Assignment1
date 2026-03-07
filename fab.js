import "./chat.js";

class Fab extends HTMLElement {

  connectedCallback(){

    this.innerHTML = `
      <style>
      .fab{
        position: fixed;
        bottom: 20px;
        right: 20px;
        background:#5ccad7;
        color:white;
        border:none;
        padding:15px;
        border-radius:50%;
        cursor:pointer;
        font-size:16px;
      }
      </style>

      <button class="fab">Chat</button>
      <div class="chat-container"></div>
    `;

    this.querySelector("button").onclick = () => {
      this.querySelector(".chat-container").innerHTML = "<x-chat></x-chat>";
    };

  }

}

customElements.define("x-fab", Fab);