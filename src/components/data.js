import dataMarvel from "../views/data.html";
import getData from "../utils/getData";
import  'tailwindcss/tailwind.css'
import "../assets/css/style.css";

const Template = async () => {
  const divElement = document.createElement("div");
  divElement.classList = "root";
  divElement.setAttribute("id", "root");
  divElement.innerHTML = dataMarvel;

  const button = divElement.querySelector("#sendData");
  
  button.addEventListener("click", async (e) => {
    const root = divElement.querySelector(".root");
    const inputNamas = divElement.querySelector("#name");
    const divHero = document.createElement("div");

    e.preventDefault();
    if (inputNamas.value === "") {
      message("El Campo esta vacio");
      return;
    }
    const data = await getData(inputNamas.value);
    const view = `
     ${data
       .map(
         (element) => `
     <div class="card mt-5">
       <div class="img-head">
         <img class="width-20" src="${element.thumbnail.path}.${element.thumbnail.extension}" alt="${element.name}">
       </div>
       <div>
         <p class="footerName">${element.name}</p>
       </div>
     </div>`
       )
       .join("")}`;

    divHero.innerHTML = view;
    console.log(divHero);
    divElement.appendChild(divHero)
    inputNamas.value = "";
  });

  const message = (mensaje) => {
    const divError = divElement.querySelector(".error");

    if (!divError) {
      const divErr = document.createElement("div");

      divErr.classList = "error";
      divErr.innerHTML = `
        <p>${mensaje}</p>
    `;
      console.log(root);
      root.appendChild(divErr);
      setTimeout(() => {
        divErr.remove();
      }, 3000);
    }
  };
  return divElement;
};

export default Template;



/*

350

014760200042515045

Santanderd

*/