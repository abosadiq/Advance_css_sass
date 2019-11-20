import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Realtors from "./Realtors";
import Features from "./Features";
import Story from "./Story";
import Homes from "./Homes";
import Gallery from "./Gallery";
import Footer from "./Footer";
import "../style.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Sidebar />

        <Realtors />
        <Features />
        <Story />
        <Homes />
        <Gallery />
        <Footer />
      </div>
    );
  }
}
export default App;
