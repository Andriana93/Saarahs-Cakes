import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateCard from "./CreateCard";
import cakeMenu from "../cakeMenu";
import FeatureBox from "./FeatureBox";
import OrderForm from "./OrderForm";

function App() {
  return (
    <div>
      <Header />
      <section className="container-fluid pink-area" id="title">
        <h1 className="big-heading">Saarah's Cakes</h1>
        <h5 className="sub-heading">Send cakes to the ones you love!</h5>
      </section>

      <section className="container-fluid white-area" id="features">
        <div className="row">
          <FeatureBox
            title="High Quality"
            explanation="Locally sourced fresh ingredients."
          />
          <FeatureBox
            title="Homemade"
            explanation="All cakes freshly baked by us."
          />
          <FeatureBox
            title="Fast Delivery"
            explanation="Next-day cake delivery!"
          />
        </div>
      </section>

      <div className="picture">
        <h2 className="sub-heading">
          Make someone's day special with our cakes!
        </h2>
      </div>

      <section className="white-area" id="cake-menu">
        <div className="row">{cakeMenu.map(CreateCard)}</div>
      </section>
      <section className="container-fluid pink-area" id="order-now">
        <OrderForm />
      </section>

      <Footer />
    </div>
  );
}

export default App;
