import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Home />
      </Wrapper>
      <Footer />
    </div>
  )
}

export default App;