function popUp(){

const body = document.body;

const painel = document.createElement("div");
painel.setAttribute("class","cssPainel");
body.appendChild(painel);

const msg = document.createElement("p");
msg.textContent = "message";
painel.appendChild(msg);

const imgPopUp = document.createElement("img");
imgPopUp.setAttribute("class","imgPopUp");
imgPopUp.src = "PointOfImg.PNG";
painel.appendChild(imgPopUp);

const closeBtn = document.createElement("button");
closeBtn.textContent= "X";
painel.appendChild(closeBtn);

closeBtn.addEventListener("click",()=> {painel.parentNode.removeChild(painel)} )
}
