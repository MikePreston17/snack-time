import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
// import todoistLogo from "./todoist.svg";

document.querySelector("#logos").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

const doist_key = import.meta.env.VITE_TODOIST_API_KEY;

// really bad hack
sessionStorage.setItem("doist", doist_key);
// keeping this so Vite doesn't complain about "The following dependencies are imported but could not be resolved", which is B.S.
export { doist_key };

let b = "";
