class Fab extends HTMLElement {

  connectedCallback(){

    this.innerHTML = `
<style>

.fab{
  position:fixed;
  bottom:20px;
  right:20px;
  background:#5ccad7;
  color:white;
  padding:15px;
  border-radius:50%;
  cursor:pointer;
}

</style>

<div class="fab">Chat</div>
<x-chat style="display:none;"></x-chat>
`;

    const button = this.querySelector(".fab");
    const chat = this.querySelector("x-chat");

    button.addEventListener("click",()=>{

      chat.style.display =
        chat.style.display === "none"
        ? "block"
        : "none";

    });
  }

}

customElements.define("x-fab", Fab);