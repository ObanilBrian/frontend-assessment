"use strict";

fetch("./assets/data.json", {
  mode: "no-cors",
})
  .then((resp) => resp.json())
  .then((data) => {
    const domContainer = document.querySelector("#root");
    const root = ReactDOM.createRoot(domContainer);
    root.render(<App data={data} />);
  });
