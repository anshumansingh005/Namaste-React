import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://marketplace.canva.com/EAESMsqG9rI/3/0/1600w/canva-grey-%26-green-elegant-minimal-good-taste-food-restaurant-logo-jeSR74GRMC8.jpg"
      />
    </a>
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
          <li>Contract</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = () => {
  return (
    <div className="card">
      <img src="https://b.zmtcdn.com/data/pictures/chains/6/18347416/c9fbbf2eed4d4ab83ce63b114e76b57f.jpg?fit=around|750:500&crop=750:500;*,*" />
      <h2>Burger King</h2>
      <h3>Burger, American</h3>
      <h4> 4.2 stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restrauntCardList">
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};
const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);
root.render(<App />);
