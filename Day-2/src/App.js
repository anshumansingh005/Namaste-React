import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { id: "title" }, "Namste Everyone!"),
  React.createElement("p", { id: "text" }, "Paragraph Text"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
