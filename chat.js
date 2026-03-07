import { handleInput, clearInput } from "./Order.js"

class Chat extends HTMLElement {

  sendMessage(evt) {
    evt.preventDefault();
    var msg = this.input.value;
    this.input.value = '';
    this.writeLine(msg);
  }

  writeLine(text) {

    this.messages.insertAdjacentHTML(
      "beforeend",
      `<li class="message-item item-secondary">You say: ${text}</li>`
    );

    const responses = handleInput(text);

    for (let message of responses) {
      this.messages.insertAdjacentHTML(
        "beforeend",
        `<li class="message-item item-primary">Bot says: ${message}</li>`
      );
    }

    this.messages.scrollTop = this.messages.scrollHeight;
  }

  connectedCallback() {

    const suffix = (Math.random()*100).toFixed().toString();

    this.innerHTML = `
<style>

.chat${suffix} ul { list-style: none; }

.chat${suffix}{
  max-width:400px;
  min-height:400px;
  background:#fff;
  padding:15px;
  border-radius:1rem;
}

.chat${suffix} .messages{
  display:flex;
  flex-direction:column;
  height:500px;
}

.chat${suffix} .message-list{
  overflow-y:auto;
  max-height:500px;
}

.chat${suffix} .message-item{
  padding:15px;
  border-radius:0.75rem;
  margin:15px 0;
}

.chat${suffix} .item-primary{
  background:#f6f7f8;
  margin-right:2em;
}

.chat${suffix} .item-secondary{
  background:#5ccad7;
  color:white;
  margin-left:2em;
}

.chat${suffix} .message-input{
  display:flex;
  padding-top:10px;
}

.chat${suffix} input{
  width:100%;
  padding:10px;
}

</style>

<div class="chat${suffix}">
  <div class="messages">
    <ul class="message-list"></ul>

    <form class="message-input">
      <input type="text" placeholder="Type message..." />
      <button type="submit">Send</button>
    </form>
  </div>
</div>
`;

    this.input = this.querySelector("input");
    this.messages = this.querySelector(".message-list");

    this.querySelector("form")
      .addEventListener('submit', this.sendMessage.bind(this));

    clearInput();

    const welcome = handleInput("");
    for (let msg of welcome) {
      this.messages.insertAdjacentHTML(
        "beforeend",
        `<li class="message-item item-primary">Bot says: ${msg}</li>`
      );
    }
  }
}

customElements.define("x-chat", Chat);