import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <img
    src="https://cdn.shopify.com/s/files/1/0739/9215/collections/image_46ecbb19-2781-41ee-b9f1-9ea3dff3c9c4.jpg?v=1599594014"
    alt="logo"
    className="logo"
  />
);
const AppLayout = () => {
  return (
    <>
      <Header />
      <BodyLayout />
    </>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const BodyLayout = () => {
  return (
    <div className="body">
      <h4>Body</h4>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);
root.render(<AppLayout />);
