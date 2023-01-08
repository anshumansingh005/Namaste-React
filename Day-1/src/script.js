// const root = document.getElementById("root");
// const newDiv = document.createElement("h1");
// newDiv.innerHTML = "Namaste React";
// root.appendChild(newDiv);

const container = React.createElement("div", { id: "container" }, [
  React.createElement("h1", { id: "title" }, "Namste Everyone!"),
  React.createElement("p", { id: "text" }, "Paragraph Text"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
