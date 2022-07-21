const template = document.createElement("template");
template.innerHTML = /*html*/`
  <style>
    * {
      font-size: 100%;
    }

    div{
      justify-items	:center;
      align-items	:center;

      margin:100px;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: red;
      color: white;
    }
    input{
      margin : 20px 0px;
      width: 200px;
      background-color: purple;
      border-radius: 5px;
      font-size: 20px;
      text-align: center;
      color:white;
    }
    h1{
      color:pink;
      background-color:purple;
      text-align: center;
      border-radius:20px;
    }

    h1:hover{
      background-color:pink;
      color:purple;
    }

  </style>
    <div>
      <button id="dec">-</button>
      <span id="count"></span>
      <button id="inc">+</button><br>
      <input type="text" value="escribiento...">
      <h1>Irving</h1>
    </div>`;

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("inc").onclick = () => this.inc();
    this.shadowRoot.getElementById("dec").onclick = () => this.dec();
    this.update(this.count);
  }

  inc() {
    this.count = this.count+5;
    this.update();
  }

  dec() {
    this.update(--this.count);
  }

  update(count) {
    this.shadowRoot.getElementById("count").innerHTML = count;
  }
}

customElements.define("my-counter", MyCounter);
