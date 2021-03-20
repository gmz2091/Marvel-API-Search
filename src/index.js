import "./assets/css/style.css";
import Template from "./components/data";

const App = () => {
  renderApp();
};

const renderApp = async () => {
  const main = null || document.getElementById("main");
  main.appendChild(await Template());
};

window.addEventListener("load", App);
