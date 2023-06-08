import React from "react";
import ReactDOM from "react-dom/client";

const container = (
  <h1 id="title">
    This is React element. It can be rendered just like this
    root.render(constainer)
  </h1>
);
const HeaderComponent = () => {
  return (
    <div>
      This is functional component in React. it has to be called like a tag
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);
root.render(<HeaderComponent />);
