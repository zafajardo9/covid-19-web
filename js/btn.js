//BUTTONS
document.getElementById("buttonBack").onclick = function () {
    location.href = "index.html";
};


const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <link rel="stylesheet" href="./css/other.css">
    
    <div class="notifyContainer">
        <h1>Hello</h1>
        <p>Contact Us Now!</p>
        <input class="input" type="number" name="" id="">
        <button class="btn">Lets Go!</button>
    </div>
    
    <div class="floater">
        <button class="btn fas fa-phone floatingContact"></button>
        <button class="btn closeCont fas fa-times"></button>
    </div>

`;
class floatBtn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    tooltip(expandState) {
        const tooltip = this.shadowRoot.querySelector('.notifyContainer');
        const float = this.shadowRoot.querySelector('.floatingContact');
        const closeCont = this.shadowRoot.querySelector('.closeCont');

        if(expandState == true ) {
            tooltip.style.transform = 'scale(1)';
            float.style.display = 'none';
            closeCont.style.display = 'block';
            expandState = false;
        }else {
            tooltip.style.transform = 'scale(0)';
            closeCont.style.display = 'none';
            float.style.display = 'block';
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.floatingContact').addEventListener('click', ()=> {
            this.tooltip(true);
            console.log("Press");
        })
        this.shadowRoot.querySelector('.closeCont').addEventListener('click', ()=> {
            this.tooltip(false);
            console.log("Close");
        })
    }
}

window.customElements.define('popup-notify', floatBtn);




